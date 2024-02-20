function Skeleton() {
  return (
    <>
      <ul className="grid gap-8 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
        {Array(15)
          .fill(null)
          .map((_, idx) => {
            return (
              <li
                key={idx}
                className="h-60 w-full animate-pulse bg-gray-300 rounded"
              />
            );
          })}
      </ul>
    </>
  );
}

export default Skeleton;
