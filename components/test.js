const blogs = [
  {
    _id: "68f642c2bbdace74233dlc7e",
    title: "The Future of Artificial Intelligence",
    desc: "Exploring how AI is transforming industries and what to expect in the coming years",
    blogImg: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",

    userId: "68f32f0a14b5e7a2a5ee3563",
    createdAt: "2025-10-20T14:10:10.925+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc7f",
    title: "Sustainable Living Tips",
    desc: "Practical ways to reduce your carbon footprint and live more sustainably",
    blogImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",

    userId: "68f32f0a14b5e7a2a5ee3564",
    createdAt: "2025-10-21T09:15:22.123+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc80",
    title: "Mastering React Hooks",
    desc: "A comprehensive guide to understanding and using React Hooks effectively",
    blogImg: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c",

    userId: "68f32f0a14b5e7a2a5ee3565",
    createdAt: "2025-10-19T16:45:33.456+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc81",
    title: "Healthy Morning Routines",
    desc: "Start your day right with these science-backed morning habits",
    blogImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",

    userId: "68f32f0a14b5e7a2a5ee3566",
    createdAt: "2025-10-18T07:30:15.789+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc82",
    title: "Blockchain Technology Explained",
    desc: "Demystifying blockchain and its applications beyond cryptocurrency",
    blogImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9",

    userId: "68f32f0a14b5e7a2a5ee3567",
    createdAt: "2025-10-22T11:20:44.321+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc83",
    title: "Travel Photography Tips",
    desc: "Capture stunning photos on your next adventure with these professional tips",
    blogImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",

    userId: "68f32f0a14b5e7a2a5ee3568",
    createdAt: "2025-10-17T14:55:12.654+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc84",
    title: "The Science of Sleep",
    desc: "Understanding sleep cycles and how to improve your sleep quality",
    blogImg: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",

    userId: "68f32f0a14b5e7a2a5ee3569",
    createdAt: "2025-10-16T20:10:28.987+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc85",
    title: "Python for Data Analysis",
    desc: "Getting started with data analysis using Python and popular libraries",
    blogImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9",

    userId: "68f32f0a14b5e7a2a5ee3570",
    createdAt: "2025-10-15T13:40:19.135+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc86",
    title: "Minimalist Home Design",
    desc: "Creating peaceful and functional spaces with minimalist principles",
    blogImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",

    userId: "68f32f0a14b5e7a2a5ee3571",
    createdAt: "2025-10-14T10:25:37.246+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc87",
    title: "Remote Work Best Practices",
    desc: "Staying productive and maintaining work-life balance while working remotely",
    blogImg: "https://ik.imagekit.io/iao5n4ddg/remote_work_Yh5kMnD",
    userId: "68f32f0a14b5e7a2a5ee3572",
    createdAt: "2025-10-13T08:15:42.579+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc88",
    title: "Meditation for Beginners",
    desc: "Simple meditation techniques to reduce stress and improve focus",
    blogImg: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5",

    userId: "68f32f0a14b5e7a2a5ee3573",
    createdAt: "2025-10-12T17:30:55.802+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc89",
    title: "Cloud Computing Basics",
    desc: "Understanding cloud services and how they benefit businesses",
    blogImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",

    userId: "68f32f0a14b5e7a2a5ee3574",
    createdAt: "2025-10-11T12:45:18.913+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc8a",
    title: "Plant-Based Nutrition",
    desc: "Health benefits and meal ideas for a plant-based diet",
    blogImg: "https://images.unsplash.com/photo-1494790108755-2616b612b786",

    userId: "68f32f0a14b5e7a2a5ee3575",
    createdAt: "2025-10-10T09:20:33.468+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc8b",
    title: "Cybersecurity Essentials",
    desc: "Protecting your digital life from common cyber threats",
    blogImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

    userId: "68f32f0a14b5e7a2a5ee3576",
    createdAt: "2025-10-09T15:35:27.791+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc8c",
    title: "Creative Writing Techniques",
    desc: "Unlock your creativity with these writing exercises and tips",
    blogImg: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",

    userId: "68f32f0a14b5e7a2a5ee3577",
    createdAt: "2025-10-08T11:50:44.124+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc8d",
    title: "Home Workout Routine",
    desc: "Effective exercises you can do at home without equipment",
    blogImg: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",

    userId: "68f32f0a14b5e7a2a5ee3578",
    createdAt: "2025-10-07T18:05:39.357+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc8e",
    title: "Digital Marketing Trends",
    desc: "Latest trends and strategies in digital marketing for 2025",
    blogImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956",

    userId: "68f32f0a14b5e7a2a5ee3579",
    createdAt: "2025-10-06T14:25:51.680+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc8f",
    title: "Mindfulness in Daily Life",
    desc: "Incorporating mindfulness practices into your everyday activities",
    blogImg: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e",

    userId: "68f32f0a14b5e7a2a5ee3580",
    createdAt: "2025-10-05T10:40:16.903+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc90",
    title: "Web Development Tools",
    desc: "Essential tools and resources for modern web developers",
    blogImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",

    userId: "68f32f0a14b5e7a2a5ee3581",
    createdAt: "2025-10-04T16:55:28.246+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc91",
    title: "Budget Travel Guide",
    desc: "How to travel the world on a tight budget without sacrificing experiences",
    blogImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",

    userId: "68f32f0a14b5e7a2a5ee3582",
    createdAt: "2025-10-03T13:10:42.579+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc92",
    title: "Machine Learning Fundamentals",
    desc: "Introduction to machine learning concepts and algorithms",
    blogImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",

    userId: "68f32f0a14b5e7a2a5ee3583",
    createdAt: "2025-10-02T09:25:55.802+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc93",
    title: "Organic Gardening Tips",
    desc: "Growing your own vegetables and herbs using organic methods",
    blogImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",

    userId: "68f32f0a14b5e7a2a5ee3584",
    createdAt: "2025-10-01T19:40:18.135+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc94",
    title: "Personal Finance Management",
    desc: "Smart strategies for budgeting, saving, and investing your money",
    blogImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9",

    userId: "68f32f0a14b5e7a2a5ee3585",
    createdAt: "2025-09-30T15:55:33.468+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc95",
    title: "UI/UX Design Principles",
    desc: "Key principles for creating intuitive and beautiful user interfaces",
    blogImg: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",

    userId: "68f32f0a14b5e7a2a5ee3586",
    createdAt: "2025-09-29T12:10:47.791+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc96",
    title: "Coffee Brewing Methods",
    desc: "Exploring different coffee brewing techniques from around the world",
    blogImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9",

    userId: "68f32f0a14b5e7a2a5ee3587",
    createdAt: "2025-09-28T08:25:12.124+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc97",
    title: "Mobile App Development",
    desc: "Trends and best practices in cross-platform mobile app development",
    blogImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",

    userId: "68f32f0a14b5e7a2a5ee3588",
    createdAt: "2025-09-27T17:40:26.357+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc98",
    title: "Mental Health Awareness",
    desc: "Understanding mental health and breaking the stigma around it",
    blogImg: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5",
    userId: "68f32f0a14b5e7a2a5ee3589",
    createdAt: "2025-09-26T14:55:39.680+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc99",
    title: "Renewable Energy Solutions",
    desc: "Innovative renewable energy technologies shaping our future",
    blogImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",

    userId: "68f32f0a14b5e7a2a5ee3590",
    createdAt: "2025-09-25T11:10:53.903+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc9a",
    title: "Learning New Languages",
    desc: "Effective methods and tools for learning foreign languages quickly",
    blogImg: "https://images.unsplash.com/photo-1494790108755-2616b612b786",

    userId: "68f32f0a14b5e7a2a5ee3591",
    createdAt: "2025-09-24T07:25:17.246+00:00",
    __v: 0,
  },
  {
    _id: "68f642c2bbdace74233dlc9b",
    title: "Entrepreneurship Guide",
    desc: "From idea to execution: starting and growing your own business",
    blogImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

    userId: "68f32f0a14b5e7a2a5ee3592",
    createdAt: "2025-09-23T16:40:31.579+00:00",
    __v: 0,
  },
];
