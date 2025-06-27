// Blog post data
export interface BlogPostContent {
  id: string;
  title: string;
  date: string;
  categories: string[];
  image: string;
  content: {
    lead: string;
    paragraphs: string[];
    blockquote?: string;
    headings?: { level: number; text: string; content: string[] }[];
    lists?: { type: 'ul' | 'ol'; items: string[] }[];
  };
  tags: string[];
  author: {
    name: string;
    avatar: string;
    bio: string;
    profileUrl?: string;
    socialLinks?: {
      facebook?: string;
      twitter?: string;
      googleplus?: string;
      instagram?: string;
    };
  };
  navigation: {
    prev?: { title: string; url: string };
    next?: { title: string; url: string };
  };
}

export interface CommentData {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  children?: CommentData[];
}

// Sample blog post data
export const sampleBlogPost: BlogPostContent = {
  id: "1",
  title: "Hey, This Is A Standard Format Post.",
  date: "September 06, 2016",
  categories: ["Wordpress", "Design"],
  image: "images/thumbs/single/single-01.jpg",
  content: {
    lead: "Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.",
    paragraphs: [
      "Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.",
      "Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus omnis voluptas assumenda est id quod maxime placeat facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et.",
      "Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed..",
      "Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
      "Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa."
    ],
    blockquote: "This is a simple example of a styled blockquote. A blockquote tag typically specifies a section that is quoted from another source of some sort, or highlighting text in your post.",
    headings: [
      {
        level: 2,
        text: "Large Heading",
        content: []
      },
      {
        level: 3,
        text: "Smaller Heading",
        content: [
          "Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
          "Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
        ]
      }
    ],
    lists: [
      {
        type: 'ul',
        items: [
          "Donec nulla non metus auctor fringilla.",
          "Donec nulla non metus auctor fringilla.",
          "Donec nulla non metus auctor fringilla."
        ]
      }
    ]
  },
  tags: ["orci", "lectus", "varius", "turpis"],
  author: {
    name: "Jonathan Smith",
    avatar: "images/avatars/user-05.jpg",
    bio: "Alias aperiam at debitis deserunt dignissimos dolorem doloribus, fuga fugiat impedit laudantium magni maxime nihil nisi quidem quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    profileUrl: "#",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      googleplus: "#",
      instagram: "#"
    }
  },
  navigation: {
    prev: { title: "Tips on Minimalist Design", url: "#" },
    next: { title: "Less Is More", url: "#" }
  }
};

// Sample comments data
export const sampleComments: CommentData[] = [
  {
    id: "1",
    author: "Itachi Uchiha",
    avatar: "images/avatars/user-01.jpg",
    date: "Jul 12, 2014 @ 23:05",
    content: "Adhuc quaerendum est ne, vis ut harum tantas noluisse, id suas iisque mei. Nec te inani ponderum vulputate, facilisi expetenda has et. Iudico dictas scriptorem an vim, ei alia mentitum est, ne has voluptua praesent."
  },
  {
    id: "2",
    author: "John Doe",
    avatar: "images/avatars/user-04.jpg",
    date: "Jul 12, 2014 @ 24:05",
    content: "Sumo euismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et tantas semper delicatissimi.",
    children: [
      {
        id: "3",
        author: "Kakashi Hatake",
        avatar: "images/avatars/user-03.jpg",
        date: "Jul 12, 2014 @ 25:05",
        content: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris",
        children: [
          {
            id: "4",
            author: "John Doe",
            avatar: "images/avatars/user-04.jpg",
            date: "July 12, 2014 @ 25:15",
            content: "Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
          }
        ]
      }
    ]
  },
  {
    id: "5",
    author: "Shikamaru Nara",
    avatar: "images/avatars/user-02.jpg",
    date: "July 12, 2014 @ 25:15",
    content: "Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem."
  }
];
