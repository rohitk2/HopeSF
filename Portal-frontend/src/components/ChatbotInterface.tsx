import React, { useState } from 'react';
import { Send, X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

import hospitalsCSV from '@/map/data/hospitals.csv?raw';
import foodDistributionCSV from '@/map/data/food-distribution-centers.csv?raw';
import laundromatsCSV from '@/map/data/laundromats.csv?raw';
import restroomsCSV from '@/map/data/restrooms.csv?raw';
import sheltersCSV from '@/map/data/shelters.csv?raw';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatbotInterfaceProps {
  initialMessage?: string;
  onClose: () => void;
}

const ChatbotInterface: React.FC<ChatbotInterfaceProps> = ({ initialMessage = '', onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Welcome! I\'m here to help you navigate San Francisco resources. How can I assist you today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    if (initialMessage) {
      handleSendMessage(initialMessage);
    }
  }, [initialMessage]);

  // Add this simple context builder (just 1-5 lines as requested)
  const context = `
Here is the data for the hospitals: ${hospitalsCSV}
Here is the data for the food banks: ${foodDistributionCSV}
Here is the data for the laundromats: ${laundromatsCSV}
Here is the data for the restrooms: ${restroomsCSV}
Here is the data for the shelters: ${sheltersCSV}

Use this data to answer any relevant questions. Assume they are in the area and whatever is in this data use to answer the questions. Don't ask them their location. Assume they are in SF and that only these resources are available.

If they ask about shelters near by use the shelters data. If they as for food banks use the food banks use that. If they ask laundromats use that. hospitals use that. Restrooms nearby use that.`;

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputValue.trim();
    if (!textToSend) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Build conversation history
      const conversationHistory = messages.map((msg) => ({
        role: msg.isUser ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));

      // Add current message
      conversationHistory.push({
        role: 'user',
        parts: [{ text: textToSend }]
      });

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: conversationHistory,
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 1024,
            },
            systemInstruction: {
              parts: [{
                text: `You are a helpful assistant for HopeSF, a platform that helps people in San Francisco find essential resources like food distribution centers, shelters, hospitals, restrooms, and laundromats. Be friendly, empathetic, and provide practical guidance. Keep responses concise but helpful.

${context}`
              }]
            }
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.status}`);
      }

      const data = await response.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: reply,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I encountered an error. Please try again.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl h-[600px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              🤖
            </div>
            <div>
              <div className="font-semibold">HopeSF Assistant</div>
              <div className="text-sm text-muted-foreground">Here to help you find resources</div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Messages */}
        <CardContent className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-lg text-muted-foreground">
                  Typing...
                </div>
              </div>
            )}
          </div>
        </CardContent>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button 
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputValue.trim()}
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Available 24/7 in English, Spanish, Chinese, and more
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ChatbotInterface;