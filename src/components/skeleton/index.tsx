function Skeleton() {
  return (
    <>
      <ul className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
        {Array(20)
          .fill(null)
          .map((_, idx) => {
            return (
              <li
                className="h-48 w-full animate-pulse bg-gray-300 rounded"
                key={idx}
              ></li>
            );
          })}
      </ul>
    </>
  );
}

export default Skeleton;
