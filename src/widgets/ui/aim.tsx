import { useUI } from "../../app/context/ui";

export const Aim = () => {
  const { isHold, hovered, description } = useUI();
  return (
    <>
      <div className="flex items-center justify-center z-10 fixed top-0 left-1/2 transform -translate-x-1/2 w-full h-36 font-bold">
        {hovered && (
          <h3 className="text-4xl text-slate-200 tracking-wider">
            {description}
          </h3>
        )}
      </div>

      <div className="flex items-center justify-center z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-4 rounded-full border-white border-2"></div>
      </div>
      <div className="flex flex-col gap-4 items-start justify-center z-10 w-96 h-48 absolute top-1/2 left-1/2 translate-x-16 -translate-y-1/2 text-white font-bold text-xl">
        {isHold && (
          <>
            <p className="rounded-lg border-4 border-white px-4 py-2">
              [LMB] to release
            </p>
            <p className="rounded-lg border-4 border-white px-4 py-2">
              [E] to throw
            </p>
          </>
        )}
        {hovered && !isHold && (
          <p className="rounded-lg border-4 border-white px-4 py-2">
            [LMB] to grab
          </p>
        )}
      </div>
    </>
  );
};
