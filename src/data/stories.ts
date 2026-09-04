export type Story = {
  slug: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  content: string[];
};

export const stories: Story[] = [
  {
    slug: "thoughtful-animal-care",
    title: "Every animal deserves thoughtful care.",
    category: "Animal Welfare",
    image: "/images/story-1.jpg",
    excerpt:
      "Good animal care begins with understanding what animals need and creating better ways to meet those needs.",
    content: [
      "Animal care is about more than responding when something goes wrong. It starts with understanding the everyday needs of animals and creating an environment where their wellbeing can come first.",
      "Thoughtful care means paying attention to the small things — access to proper care, responsible decisions, safe environments, and the people who make those things possible.",
      "At Sewa Paws, we believe better animal care can come from combining compassion with practical thinking. By looking at existing challenges differently, we can explore approaches that are more accessible and easier for people to act on.",
      "There is no single solution to every challenge in animal welfare. Progress can begin with small, meaningful improvements that make care more responsible and connected.",
    ],
  },
  {
    slug: "culture-of-responsible-care",
    title: "Building a culture of responsible care.",
    category: "Community",
    image: "/images/story-2.jpg",
    excerpt:
      "Creating better outcomes for animals also means encouraging people to think differently about responsibility and care.",
    content: [
      "Animal welfare is closely connected to the choices people make every day. Building a stronger culture of care means helping people understand that responsibility does not have to be complicated.",
      "It can begin with learning, asking better questions, recognising the needs of animals, and making more thoughtful decisions.",
      "Communities also have an important role to play. When people share knowledge, ideas, and resources, it becomes easier to create positive change and support better approaches to animal care.",
      "Sewa Paws wants to contribute to that conversation by exploring practical ideas and creating connections around animal-focused care.",
    ],
  },
  {
    slug: "rethinking-animal-care",
    title: "Rethinking the way we care for animals.",
    category: "Ideas",
    image: "/images/story-3.jpg",
    excerpt:
      "Sometimes better care starts by questioning the way things have always been done.",
    content: [
      "Many challenges in animal care are not caused by a lack of compassion. They can also come from limited access to information, resources, or practical solutions.",
      "Rethinking animal care means looking at these challenges from different perspectives and asking what could work better.",
      "Technology, community participation, better information, and responsible innovation can all play a role in creating new possibilities for animal wellbeing.",
      "For an emerging company like Sewa Paws, this means staying curious, learning from real challenges, and exploring ideas that can turn care into meaningful action.",
    ],
  },
  {
    slug: "people-and-animals",
    title: "Creating stronger connections between people and animals.",
    category: "Community",
    image: "/images/story-4.jpg",
    excerpt:
      "Better relationships between people and animals can help create more thoughtful and responsible communities.",
    content: [
      "Animals are part of the communities around us, yet their needs can sometimes be overlooked. Creating stronger connections starts with recognising their place in our everyday lives.",
      "When people have better access to knowledge and practical ways to contribute, caring for animals becomes something that can be shared rather than left to a small number of people.",
      "Strong communities are built through participation. Everyone can contribute in different ways, whether through learning, sharing information, supporting useful initiatives, or simply making more responsible choices.",
      "Sewa Paws believes that bringing people and ideas together can help create a future where animal care is treated with greater thoughtfulness and responsibility.",
    ],
  },
];