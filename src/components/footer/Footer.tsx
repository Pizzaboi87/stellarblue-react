import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-6 bg-textlight rounded-t-xl flex items-center justify-between text-[1.2rem]">
      <img src="/logo.png" alt="logo" className="h-10" />
      <p className="hidden md:block">2024</p>
      <a
        href="https://github.com/pizzaboi87"
        target="_blank"
        className="flex gap-2 items-center"
      >
        <Icon icon="bi:github" className="text-[1.5rem]" />
        <p className="text-[1.25rem] pt-1">Weiser</p>
      </a>
    </footer>
  );
};

export default Footer;
