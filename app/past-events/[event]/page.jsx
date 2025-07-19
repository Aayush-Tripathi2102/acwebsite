"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function Page() {
  const { event } = useParams();
  const router = useRouter();
  useEffect(() => {
    console.log(event);
  }, []);
  return (
    <motion.div
      layoutId={event}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="w-full h-full bg-gray-950 overflow-y-auto p-10 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-900"
    >
      <ArrowLeft
        onClick={() => {
          router.push("/past-events/");
        }}
        className="absolute text-gray-100 w-10 h-10 rounded-full hover:bg-gray-800 p-2 cursor-pointer"
      />
      <h1 className="text-2xl md:text-3xl font-bold text-center text-green-300 mb-8">
        Events - About
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Left Card */}
        <div className="bg-gray-900 border border-gray-800 flex flex-col justify-between rounded-xl h-auto relative">
          <div className="relative rounded-lg overflow-auto">
            <div className="">
              <Image
                src="/pics/eventCard.png"
                alt="Event Image"
                width={600}
                height={300}
                className="w-full object-cover aspect-video"
              />
            </div>

            <div className="absolute left-1/4 top-1/2 translate-y-[-50%] translate-x-[-50%] text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">{event}</h2>
              <p className="text-xl">28 June 25</p>
            </div>
          </div>

          {/* Details */}
          <div className="mt-4 text-base grid grid-cols-1 2xl:grid-cols-2 gap-y-1 p-4 text-gray-300">
            <div>
              <p>
                <span className="font-semibold text-[18px] text-gray-100">
                  Time:
                </span>{" "}
                11:40 - 1 pm
              </p>
              <p>
                <span className="font-semibold text-[18px] text-gray-100">
                  Venue:
                </span>{" "}
                Netaji Auditorium
              </p>
              <p>
                <span className="font-semibold text-[18px] text-gray-100">
                  Winners:
                </span>{" "}
                Not Announced
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold text-[18px] text-gray-100">
                  Student Coordinators:
                </span>
                &nbsp;John Wick
              </p>
              <p>
                <span className="font-semibold text-[18px] text-gray-100">
                  Participants:
                </span>{" "}
                76
              </p>
            </div>
          </div>

          {/* Rewards */}
          <div className="mt-4 bg-gray-800 p-4 rounded-lg text-gray-200 ">
            <p className="font-extrabold text-[30px] mb-2 text-green-300">
              Rewards
            </p>
            <ul className="text-[20px] list-disc list-inside font-bold">
              <li>1st Place - 1000rs</li>
              <li>2nd Place - 500rs</li>
              <li>3rd Place - 250rs</li>
            </ul>
          </div>
        </div>

        {/* Description Box */}
        <motion.div className="bg-gray-900 border border-gray-800 rounded-xl h-[600px] overflow-auto p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-green-300">
              Description
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ducimus, est sapiente tempore suscipit magnam, autem
              quis pariatur adipisci, assumenda eligendi non rerum neque eos!
              Optio aut facilis natus maiores qui, excepturi numquam eligendi,
              autem ipsam veniam porro possimus aperiam aliquid cum. Porro
              soluta pariatur debitis fuga esse commodi voluptatibus dignissimos
              reiciendis doloribus consequuntur quos ullam laudantium harum illo
              tenetur cupiditate, recusandae nulla, assumenda repellat quo
              praesentium! Tempora ratione eaque deleniti mollitia totam, eum
              reprehenderit deserunt laboriosam rerum officiis architecto
              tenetur quaerat nemo id velit adipisci veniam. Facilis laboriosam
              !
            </p>
            <p className="text-xs text-gray-400">OD will be Provided</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
