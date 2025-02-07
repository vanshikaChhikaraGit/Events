import { config } from "dotenv";
import { connectDB } from "../lib/connectDb.js";
import Event from "../models/event.model.js";

config();

const seedUsers = [
    {
        eventname:"Miss Monique",
       description:"Mumbai, get ready for the Progressive House Queen! 🌟🎶 For the first time ever in Mumbai, Miss Monique is bringing her electrifying sound to the city on 7th February 2025 (Friday)! 🔥Early Bird tickets are live now! 🎟️ Grab yours before they're gone — very limited tickets available.",
       date:"February 10 2025",
       price:"1599",
       venue:"Mercii, Mumbai",
       language:"English",
       category:"music",
       image:"https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_1280/c_crop%2Cg_custom%2Fv1738216747%2Fvvqicrzplxfncqjyms2f.jpg"
      },
      {
       eventname:"Arijit Singh India Tour 2025 ",
       description:"Join us for an extraordinary evening featuring the biggest production Arijit has ever brought to the stage! Whether you’re a longtime fan or discovering his music for the very first time, this is a once-in-a-lifetime opportunity to experience the magic live. So mark your calendars, grab your BFFs/parents/grandparents and make your plans because the world’s most followed artist on Spotify, our very own Arijit Singh is only a ticket away!",
       date:"March 23 2025",
       price:"13500",
       venue:"Jio World Garden, Mumbai",
       language:"Hindi",
       category:"music",
       image:"https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_1280/c_crop%2Cg_custom%2Fv1737025373%2Fmc5abnpx9ukirze2d3sh.jpg"
      },
      {
        eventname:"Millionaire India Tour | Yo Yo Honey Singh Live",
       description:"The King of Swag, the OG hitmaker, and the icon who revolutionized Indian music Yo Yo Honey Singh is back to set the stage on fire with his legendary hits! It’s time to gather your gang, hype up your vibe, and prepare for a nostalgic night as Yo Yo Honey Singh, the legend who gave us bangers HITS! Mark your calendars and round up your crew, because this isn’t just any other concert - it’s the ultimate YOLO experience!",
       date:"February 22 2025",
       price:"3500",
       venue:"Nesco Pvt Ltd, Mumbai",
       language:"Hindi",
       category:"music",
       image:"https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_1280/c_crop%2Cg_custom%2Fv1736568232%2Fkaumj64kfoq7z81bdpxx.jpg"
      },
      {
        eventname:"It’s A Girl Thing India | Season 5, 2025",
       description:"It's A Girl Thing is a festival with a purpose, bringing young women and their besties together to celebrate the good stuff in life 💃💖. Season 5 of the festival is happening on 1st March 2025, kicking off International Women's Week in an unforgettable way! 🌍👩‍🎤",
       date:"March 1 2025",
       price:"299",
       venue:"JVPD Ground - Arvog Leisure, Mumbai",
       language:"Hindi",
       category:"festival",
       image:"https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_1280/c_crop%2Cg_custom%2Fv1738058316%2Folvzsaxkuduywgcxktnu.png"
      },
      {
    eventname:"Frolic Fields 2025",
       description:"FROLIC FIELDS – MUMBAI’S ULTIMATE FAMILY FESTIVAL! 🎡🎶✨Looking for an unforgettable family experience? Frolic Fields is back – bigger, better, and bursting with excitement!Frolic Fields is more than just a festival—it’s an immersive, hands-on playground designed for families to explore, learn, and create lifelong memories together. With a strong focus on family bonding, experiential learning, and interactive fun, it’s the perfect weekend getaway where kids and parents can laugh, play, and grow together away from screens and distractions! 🌍",
       date:"March 5 2025",
       price:"499",
       venue:"JVPD Ground - Arvog Leisure, Mumbai",
       language:"Hindi",
       category:"festival",
       image:"https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_1280/c_crop%2Cg_custom%2Fv1738834260%2Fb4dwmra5ak1q6nc4cztd.jpg"
      },
  {
   eventname:"TIËSTO India Tour 2025",
   description:`🎧 Delhi, get ready to witness the godfather of EDM, Tiësto! 🎧The legendary DJ and Grammy Award-winning artist Tiësto is bringing his electrifying beats to Delhi on 13th February 2025! Known as the Godfather of EDM, Tiësto will take over the stage with iconic hits like "The Business", "Don’t Be Shy", and "Hot In It". Prepare for a night of unparalleled energy, breathtaking visuals, and unforgettable drops as Delhi becomes the epicenter of an extraordinary music experience. This isn’t just a concert; it’s a night where music, passion, and energy collide to create pure magic. Don’t miss the chance to witness history in the making!`,
   date:"February 13 2025",
   price:"2499",
   venue:"Backyard Sports Club, Gurugram",
   language:"English",
   category:"music",
   image:"https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_1280/c_crop%2Cg_custom%2Fv1737627191%2Fa3m8gyeshiarksd6xqhl.jpg"
  },
  {
    eventname:"Bollywood Takeover Friday Night",
   description:"Get ready to groove to your favorite desi beats at Bollywood Night this Friday at Diablo, Delhi! 🎶✨ Immerse yourself in the magic of Bollywood music, energetic vibes, and an unforgettable evening. Join us from 9:00 PM onwards for a night of non-stop dancing, delicious drinks, and an electrifying ambiance. Don’t miss the ultimate party experience this weekend—see you at Diablo! 💃🕺 #BollywoodNight #DiabloDelhi #WeekendVibes",
   date:"January 24",
   price:"999",
   venue:"Diablo, Delhi",
   language:"Hindi",
   category:"music",
   image:"https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_400/c_crop%2Cg_custom%2Fv1738394829%2Fkjlkptf4q22o2pufh2sv.jpg"
  },
  {
    eventname:"AR VR Workshop",
   description:`Join us for an immersive and hands-on workshop where you’ll dive into the exciting world of Augmented Reality (AR) and Virtual Reality (VR). This workshop is designed for beginners and those looking to expand their knowledge and skills in AR/VR development.Through learning by doing sessions, you'll learn how to create engaging AR and VR apps and games from the ground up. Don’t miss out on this opportunity to explore the future of technology – reserve your spot today!`,
   date:"February 18 2025",
   price:"1499",
   venue:"STEAM Varsity Makerspace, Gurugram",
   language:"English",
   category:"workshops",
   image:"https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_1280/c_crop%2Cg_custom%2Fv1738070888%2Fw9wekqt2ieuz588eomxe.png"
  },
  {
    eventname:"Sip and Paint - Canvas Painting",
   description:"Indulge in a delightful evening of artistic expression and relaxation at our Sip & Paint event! Unleash your inner artist as you sip on your beverages and let your creativity take flight onto the canvas. No prior painting experience is needed.",
   date:"March 2 2025",
   price:"1750",
   venue:"Vasant Kunj Social, Delhi",
   language:"English",
   category:"workshops",
   image:"https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_1280/c_crop%2Cg_custom%2Fv1738473029%2Fbwrchevbyj3urtlraq5i.jpg"
  },
  {
    eventname:"Business Networking New Delhi 2025",
   description:"Key highlights of the meetup include a sales connect session where participants can showcase their products or services exchange leads and explore potential partnerships. This interactive session allows you to pitch your offerings learn about others' offerings and discover new business opportunities. Additionally industry-related small talks cover a wide range of subjects such as market trends business strategies and marketing techniques. These discussions provide an excellent opportunity to learn from industry experts gain new perspectives and stay updated on the latest developments in your field.",
   date:"February 13 2025",
   price:"475",
   venue:"Nojoto Creator Hub, Delhi",
   language:"English",
   category:"conference",
   image:"https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_1280/c_crop%2Cg_custom%2Fv1738071052%2Fbzjkpku9gxixhvatowms.jpg"
  },
  {
   eventname:"GLOBAL STARTUPS CLUB l STARTUP NETWORKING",
   description:"Introducing Global Startups Club - a networking hub & community that will meet once a month over tea & coffee. Our mission is to bring together talented founders experts consultants influential leaders and startup professionals. Business community will come together for a well curated agenda driven 2.5 hrs offline meet showcasing their businesses.",
   date:"February 15 2025",
   price:"450",
   venue:"Nojoto Creator Hub, Delhi",
   language:"English",
   category:"conference",
   image:""
  },
  {
    eventname:"NAKADIA x ALEX MEDINA Live",
   description:"Catch the iconic NAKADIA along with ALEX MEDINA takeover the CORE FESTIVAL at High Ultra Lounge on 8th February, Saturday, 7 PM onwards. 🌌✨🌟 What’s in Store?5+ artists delivering non-stop techno vibes 🎵Stunning views from Bengaluru’s highest party destination 🌇A night filled with electrifying beats, curated cocktails, and unforgettable energy 🍸",
   date:"February 24 2025",
   price:"299",
   venue:"High Ultra Lounge, Bengaluru",
   language:"English",
   category:"music",
   image:"https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_1280/c_crop%2Cg_custom%2Fv1738050265%2Fe1vb3rqydohnqgkcgipy.jpg"
  },
  {
    eventname:"Delirium Festival 2025",
   description:"Get ready to groove, India! 🎶This is your music festival—where the beats are fresh, the vibes are high, and the energy is just right. From indie anthems to genre-bending sounds, Delirium is about discovering your new faves and singing your heart out to unexpected bangers. it’s not just a show—it’s a party! Think surprise collabs, endless grooves, and those goosebump-inducing live moments you’ll be talking about for a day.This festival is about celebrating the dreamers, the rule-breakers, and the next-gen creators shaping the music scene. So whether you’re here to dance like nobody’s watching, vibe with your tribe, or simply soak in the feels, this one’s got it all. It’s time to let loose, have fun, and create some epic memories.Because this isn’t just music—it’s a celebration, and you’re invited!",
   date:"March 2 2025",
   price:"2499",
   venue:"TERRAFORM - Main Gate, Bengaluru",
   language:"Hindi",
   category:"festival",
   image:"https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_1280/c_crop%2Cg_custom%2Fv1737970397%2Flp7oifzrzpfpu6rcxs09.jpg"
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await Event.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();