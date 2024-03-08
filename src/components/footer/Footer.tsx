import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-6 bg-textlight rounded-t-xl flex items-center justify-between text-[1.2rem]">
      <img src="/logo.png" alt="logo" className="h-10" />
      <p>2024</p>
      <a
        href="https://github.com/pizzaboi87"
        target="_blank"
        className="flex gap-2 items-center"
      >
        <Icon icon="bi:github" />
        <p>Weiser</p>
      </a>
    </footer>
  );
};

export default Footer;
