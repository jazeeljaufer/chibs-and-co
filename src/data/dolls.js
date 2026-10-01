import graduateImg from '../assets/images/dolls/gradjuate.svg'
import bakerImg from '../assets/images/dolls/baker.svg'
import coderImg from '../assets/images/dolls/coder.svg'
import brideImg from '../assets/images/dolls/bride.svg'
import readerImg from '../assets/images/dolls/reader.svg'
import bestfriendImg from '../assets/images/dolls/bestfriend.svg'

export const categories = ["All", "Graduation", "Wedding", "Work", "Gifts"];

export const dolls = [
  {
    id: 1,
    title: "The Graduate",
    description: "Complete with a tiny cap and gown, painted in your school colors.",
    image: graduateImg,
    category: "Graduation",
    tags: ["Cap & Gown", "Custom Colors"]
  },
  {
    id: 2,
    title: "The Baker",
    description: "Wearing a tiny apron and holding a little wooden whisk.",
    image: bakerImg,
    category: "Work",
    tags: ["Apron", "Props"]
  },
  {
    id: 3,
    title: "The Coder",
    description: "Rocking a favorite hoodie and a miniature laptop.",
    image: coderImg,
    category: "Work",
    tags: ["Hoodie", "Laptop"]
  },
  {
    id: 4,
    title: "The Happy Couple",
    description: "Perfect for cake toppers or wedding keepsakes. Painted in exact wedding attire.",
    image: brideImg,
    category: "Wedding",
    tags: ["Custom Dress", "Suit"]
  },
  {
    id: 5,
    title: "The Bookworm",
    description: "Cozy sweater and reading a classic novel.",
    image: readerImg,
    category: "Gifts",
    tags: ["Sweater", "Book"]
  },
  {
    id: 6,
    title: "Best Friends",
    description: "A matching pair to celebrate a special bond.",
    image: bestfriendImg,
    category: "Gifts",
    tags: ["Matching", "BFF"]
  }
];