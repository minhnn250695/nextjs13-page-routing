// Category-specific data
import { BlogPostData } from './posts';

export interface CategoryData {
  name: string;
  description?: string;
  posts: BlogPostData[];
}

// Sample category data for Photography
export const photographyCategory: CategoryData = {
  name: "Photography",
  description: "Discover amazing photography tips, techniques, and inspiration",
  posts: [
    {
      id: "cat-1",
      format: "standard",
      title: "Just a Standard Format Post.",
      url: "blog/single-standard",
      excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.",
      categories: ["Design", "Photography"],
      image: "images/thumbs/diagonal-building.jpg",
      imageAlt: "building"
    },
    {
      id: "cat-2",
      format: "standard",
      title: "This Is Another Standard Format Post.",
      url: "blog/single-standard",
      excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.",
      categories: ["Design", "UI"],
      image: "images/thumbs/ferris-wheel.jpg",
      imageAlt: "ferris wheel"
    },
    {
      id: "cat-3",
      format: "audio",
      title: "This Is a Audio Format Post.",
      url: "blog/single-audio",
      excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.",
      categories: ["Design", "Music"],
      image: "images/thumbs/concert.jpg",
      imageAlt: "concert",
      audioSrc: "media/AirReview-Landmarks-02-ChasingCorporate.mp3"
    },
    {
      id: "cat-4",
      format: "quote",
      quote: "Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.",
      author: "Dieter Rams"
    },
    {
      id: "cat-5",
      format: "standard",
      title: "Photography Skills Can Improve Your Graphic Design.",
      url: "blog/single-standard",
      excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.",
      categories: ["Photography", "html"],
      image: "images/thumbs/shutterbug.jpg",
      imageAlt: "Shutterbug"
    },
    {
      id: "cat-6",
      format: "standard",
      title: "The 10 Golden Rules of Clean Simple Design.",
      url: "blog/single-standard",
      excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.",
      categories: ["Branding", "Mockup"],
      image: "images/thumbs/usaf-rocket.jpg",
      imageAlt: "USAF rocket"
    },
    {
      id: "cat-7",
      format: "gallery",
      title: "Workspace Design Trends and Ideas.",
      url: "blog/single-gallery",
      excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.",
      categories: ["Branding", "Wordpress"],
      images: [
        "images/thumbs/gallery/work1.jpg",
        "images/thumbs/gallery/work2.jpg",
        "images/thumbs/gallery/work3.jpg"
      ]
    },
    {
      id: "cat-8",
      format: "link",
      description: "Looking for affordable & reliable web hosting? We recommend Dreamhost.",
      url: "http://www.dreamhost.com/r.cgi?287326",
      displayUrl: "http://www.dreamhost.com"
    },
    {
      id: "cat-9",
      format: "standard",
      title: "You Can See Patterns Everywhere.",
      url: "blog/single-standard",
      excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.",
      categories: ["Design", "UI"],
      image: "images/thumbs/diagonal-pattern.jpg",
      imageAlt: "Pattern"
    },
    {
      id: "cat-10",
      format: "video",
      title: "This Is a Video Post Format.",
      url: "blog/single-video",
      excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.",
      categories: ["Design", "Branding"],
      image: "images/thumbs/ottawa-bokeh.jpg",
      imageAlt: "bokeh",
      videoUrl: "http://player.vimeo.com/video/14592941?title=0&byline=0&portrait=0&color=F64B39"
    },
    {
      id: "cat-11",
      format: "standard",
      title: "Breathtaking Photos of Lighthouses.",
      url: "blog/single-standard",
      excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.",
      categories: ["Photography", "Design"],
      image: "images/thumbs/lighthouse.jpg",
      imageAlt: "Lighthouse"
    },
    {
      id: "cat-12",
      format: "standard",
      title: "Designing With Black and White.",
      url: "blog/single-standard",
      excerpt: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.",
      categories: ["Branding", "html"],
      image: "images/thumbs/liberty.jpg",
      imageAlt: "Liberty"
    }
  ]
};

// Export a full categories object with multiple categories
export const categories: Record<string, CategoryData> = {
  photography: photographyCategory,
  
  wordpress: {
    name: "WordPress",
    description: "WordPress development tips, themes, and plugins",
    posts: [
      {
        id: "wp-1",
        format: "standard",
        title: "Creating Custom WordPress Themes",
        url: "blog/wordpress-themes",
        excerpt: "Learn how to create beautiful and functional WordPress themes from scratch.",
        categories: ["WordPress", "Development"],
        image: "images/thumbs/wordpress-theme.jpg",
        imageAlt: "WordPress theme development"
      },
      {
        id: "wp-2",
        format: "standard",
        title: "Best WordPress Plugins for 2024",
        url: "blog/wordpress-plugins",
        excerpt: "Discover the most essential WordPress plugins for modern websites.",
        categories: ["WordPress", "Plugins"],
        image: "images/thumbs/wordpress-plugins.jpg",
        imageAlt: "WordPress plugins"
      }
    ]
  },
  
  html: {
    name: "HTML",
    description: "HTML5 tutorials, best practices, and modern techniques",
    posts: [
      {
        id: "html-1",
        format: "standard",
        title: "HTML5 Semantic Elements Guide",
        url: "blog/html5-semantic",
        excerpt: "Master HTML5 semantic elements for better accessibility and SEO.",
        categories: ["HTML", "Web Development"],
        image: "images/thumbs/html5-semantic.jpg",
        imageAlt: "HTML5 semantic elements"
      }
    ]
  },
  
  ui: {
    name: "UI Design",
    description: "User interface design principles and trends",
    posts: [
      {
        id: "ui-1",
        format: "standard",
        title: "Modern UI Design Principles",
        url: "blog/ui-design-principles",
        excerpt: "Essential UI design principles for creating intuitive user interfaces.",
        categories: ["UI", "Design"],
        image: "images/thumbs/ui-design.jpg",
        imageAlt: "UI design principles"
      }
    ]
  },
  
  mockups: {
    name: "Mockups",
    description: "Design mockups and prototyping resources",
    posts: [
      {
        id: "mock-1",
        format: "standard",
        title: "Creating Realistic Design Mockups",
        url: "blog/design-mockups",
        excerpt: "Tips for creating professional design mockups that impress clients.",
        categories: ["Mockups", "Design"],
        image: "images/thumbs/design-mockups.jpg",
        imageAlt: "Design mockups"
      }
    ]
  },
  
  branding: {
    name: "Branding",
    description: "Brand identity and logo design inspiration",
    posts: [
      {
        id: "brand-1",
        format: "standard",
        title: "Building Strong Brand Identity",
        url: "blog/brand-identity",
        excerpt: "Learn how to create memorable and effective brand identities.",
        categories: ["Branding", "Design"],
        image: "images/thumbs/brand-identity.jpg",
        imageAlt: "Brand identity design"
      }
    ]
  }
};
