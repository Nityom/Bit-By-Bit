const config = {
  title: "Bit By Bit Studio | Web & App Development Services",
  description: {
    long: "Bit By Bit Studio is a freelance web and app development agency specializing in custom websites, mobile applications, and innovative digital solutions. We transform your ideas into powerful digital experiences using modern technologies like React, Next.js, Node.js, and more. Let's build your next project together!",
    short:
      "Bit By Bit Studio - Freelance web and app development services. Custom websites, mobile apps, and digital solutions tailored to your needs.",
  },
  keywords: [
    "Bit By Bit Studio",
    "web development",
    "app development",
    "freelance development",
    "custom websites",
    "mobile apps",
    "web design",
    "digital solutions",
    "React development",
    "Next.js development",
    "Node.js development",
    "full-stack development",
    "UI/UX design",
    "responsive design",
    "web applications",
  ],
  author: "Bit By Bit Studio",
  email: "nityomtikherr@gmail.com",
  site: "https://bitbybitstudio.com",

  // for github stars button
  githubUsername: "",
  githubRepo: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "", // "https://x.com/bitbybitstudio",
    linkedin: "https://www.linkedin.com/company/bit-by-bit-789/",
    instagram: "https://www.instagram.com/bitbybitstudio",
    facebook: "https://www.facebook.com/bitbybitstudio",
    github: "", // "https://github.com/bitbybitstudio",
  },
};
export { config };
