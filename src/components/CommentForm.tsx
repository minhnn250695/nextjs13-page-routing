"use client";
import { useState } from "react";

interface CommentFormProps {
  onSubmit?: (data: { name: string; email: string; website: string; message: string }) => void;
  isSubmitting?: boolean;
}

export default function CommentForm({ onSubmit, isSubmitting = false }: CommentFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    // Reset form
    setFormData({ name: "", email: "", website: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="respond">
      <h3>Leave a Comment</h3>

      <form name="contactForm" id="contactForm" method="post" onSubmit={handleSubmit}>
        <fieldset>
          <div className="form-field">
            <input
              name="name"
              type="text"
              id="cName"
              className="full-width"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <input
              name="email"
              type="email"
              id="cEmail"
              className="full-width"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <input
              name="website"
              type="url"
              id="cWebsite"
              className="full-width"
              placeholder="Website"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <div className="message form-field">
            <textarea
              name="message"
              id="cMessage"
              className="full-width"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit button-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </fieldset>
      </form>
    </div>
  );
}
