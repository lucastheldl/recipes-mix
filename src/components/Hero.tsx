import Image from "next/image";
import callImage from "../../public/CallImage.png";

export function Hero() {
  return (
    <div className="flex px-24  bg-lightBlue">
      <div className="flex flex-col flex-1 gap-8 py-10 leading-tight">
        <h1 className="font-bold text-xxl text-violet">Mostre suas receitas</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Pellentesque risus faucibus
          ornare ac dignissim semper orci. Auctor blandit maecenas ipsum quam.
          Id a pellentesque lacus integer elit pulvinar et est. Venenatis
          tristique imperdiet a pharetra.Lorem ipsum dolor sit amet consectetur.
          Pellentesque risus faucibus ornare ac dignissim semper orci. Auctor
          blandit maecenas ipsum quam. Id a pellentesque lacus integer elit
          pulvinar et est. Venenatis tristique imperdiet a pharetra.
        </p>
        <div>
          <button className="bg-orange py-3 px-4 rounded-xl text-white font-semibold">
            Quero cozinhar
          </button>
        </div>
      </div>
      <div className="flex-1">
        <Image alt="" src={callImage} />
      </div>
    </div>
  );
}
