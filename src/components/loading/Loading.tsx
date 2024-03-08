const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-[1rem]">
      <div className="w-[20rem] h-[20rem] border-4 border-black dark:border-white rounded-full flex items-center justify-center relative">
        <div className="w-10 h-10 rounded-full absolute right-3 top-10 border-stellar border-4 bg-white" />
        <div className="rounded-full h-20 w-20 bg-stellar dark:border-white dark:border animate-ping" />
      </div>
      <h1 className="font-bold text-[1.2rem] ml-3 text-textdark dark:text-textlight">
        loading...
      </h1>
    </div>
  );
};

export default Loading;
