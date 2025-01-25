export interface Course {
    id: number;
    title: string;
    description: string;
    duration: string;
    category: string;
    instructor: string; // Required property
    author: string;
    price: number;
    rating: number;
    thumbnailUrl: string;
  }
  
  export const sampleCourses: Course[] = [
    {
      id: 1,
      title: "React for Beginners",
      description: "Learn the basics of React and build your first web app.",
      duration: "10 hours",
      category: "Programming",
      instructor: "John React", // Add this field
      author: "John Doe",
      price: 49.99,
      rating: 4.5,
      thumbnailUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Mastering TypeScript",
      description: "A comprehensive guide to TypeScript for modern development.",
      duration: "8 hours",
      category: "Programming",
      instructor: "Jane TypeScript", // Add this field
      author: "Jane Smith",
      price: 59.99,
      rating: 4.8,
      thumbnailUrl: "https://via.placeholder.com/150",
    },
  ];
  