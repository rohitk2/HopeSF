import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BecomePartner = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    organizationType: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    address: '',
    partnershipType: '',
    description: '',
    resources: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle partnership application logic here
    console.log('Partnership Application:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Become a Partner</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our network of organizations working together to address homelessness in San Francisco. 
              Together, we can make a greater impact.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Partnership Application</CardTitle>
              <CardDescription>
                Tell us about your organization and how you'd like to partner with HopeSF
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="organizationName">Organization Name</Label>
                    <Input
                      id="organizationName"
                      name="organizationName"
                      placeholder="Your Organization Name"
                      value={formData.organizationName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organizationType">Organization Type</Label>
                    <Select onValueChange={(value) => handleSelectChange('organizationType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select organization type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nonprofit">Non-Profit Organization</SelectItem>
                        <SelectItem value="government">Government Agency</SelectItem>
                        <SelectItem value="healthcare">Healthcare Provider</SelectItem>
                        <SelectItem value="education">Educational Institution</SelectItem>
                        <SelectItem value="business">Business/Corporate</SelectItem>
                        <SelectItem value="religious">Religious Organization</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Primary Contact</Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      placeholder="Full Name"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="contact@organization.org"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website (Optional)</Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://www.organization.org"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Street Address, City, State, ZIP"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="partnershipType">Partnership Interest</Label>
                  <Select onValueChange={(value) => handleSelectChange('partnershipType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="How would you like to partner with us?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="service-provider">Service Provider</SelectItem>
                      <SelectItem value="funding">Funding/Grants</SelectItem>
                      <SelectItem value="volunteer">Volunteer Coordination</SelectItem>
                      <SelectItem value="resource-sharing">Resource Sharing</SelectItem>
                      <SelectItem value="advocacy">Advocacy & Policy</SelectItem>
                      <SelectItem value="research">Research & Data</SelectItem>
                      <SelectItem value="technology">Technology Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Organization Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Tell us about your organization's mission and current work"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="resources">Resources & Capabilities</Label>
                  <Textarea
                    id="resources"
                    name="resources"
                    placeholder="What resources, services, or capabilities can your organization contribute to addressing homelessness?"
                    value={formData.resources}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Submit Partnership Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BecomePartner;