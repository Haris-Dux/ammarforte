"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

const page = ({ params }: any) => {
  const blogData = [
    {
      id: 1,
      h1: "Conquering the Maze: A Comprehensive Guide to Mortgage Pre-Approval",
      p1: "So you've set your sights on homeownership – congratulations! It's an exhilarating time filled with dreams of housewarming parties and backyard barbecues. But amidst the excitement, the mortgage process can feel like a labyrinth of confusing terms and intricate steps. Fear not, future homeowner! This guide will be your compass, focusing on a crucial aspect –  mortgage pre-approval.",
      h2: "What is Pre-Approval and Why is it Crucial?",
      p2: "  Imagine walking into a crowded auction without knowing your spending limit. That's essentially what house hunting can be like without pre-approval. Pre-approval is the formal process where a lender assesses your financial health and determines the maximum loan amount you qualify for. It's like getting a green light from the financial world, saying, Yes, you can afford a home up to this value!",
      img: "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/kenny-eliason-mGZX2MOPR-s-unsplash.webp?v=1719930504", // Replace with the path to your image
      h3: "The Bottom Line: Pre-Approval – Your Ticket to Homeownership Success",
      p3: "By getting pre-approved, you're taking control of your homebuying journey. It empowers you to make informed decisions, present strong offers, and navigate the process with confidence. So, equip yourself with this valuable tool, and watch your dream of homeownership turn into a beautiful reality.",
    },
    {
      id: 2,
      h1: "Decoding the Mortgage Maze: Interest Rates, Points, and Finding the Best Deal",
      p1: "Congratulations on taking the first step towards homeownership! Now that you've conquered the pre-approval stage, it's time to delve into the world of mortgage rates and terms. This can feel like a complex puzzle, but fret not –  this guide will equip you to decipher the jargon and find the best mortgage deal for your needs.",
      h2: "Interest Rates: The Engine Driving Your Mortgage Costs",
      p2: " The interest rate is essentially the cost of borrowing money. It's a percentage of the loan amount that you'll pay over the life of the mortgage, significantly impacting your monthly payments.  Understanding different types of interest rates is crucial Points are upfront fees you can pay to the lender in exchange for a lower interest rate.  Think of it like a discount – by paying a bit more upfront, you secure a lower interest rate, potentially saving thousands over the loan term.  The decision to buy points depends on your financial situation and future plans. If you plan to stay in the home for a long time, points can be a wise investment.",
      img: "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/naomi-hebert-MP0bgaS_d1c-unsplash.webp?v=1719930550", // Replace with the path to your image
      h3: "Knowledge is Power: Owning Your Mortgage Journey",
      p3: "By understanding interest rates, points, and the various factors at play, you're empowered to make informed decisions. Remember, the best mortgage isn't just about the lowest rate; it's about finding the terms that align with your financial goals and long-term plans. So, take your time, research thoroughly, and don't hesitate to ask questions. With this knowledge, you'll be well on your way to securing the perfect mortgage and achieving your dream of homeownership.",
    },
    {
      id: 3,
      h1: "Homeownership Hustle: Unveiling the Down Payment Mystery",
      p1: "So you've aced the pre-approval stage and navigated the maze of mortgage rates and terms. Now you're facing a new challenge – the down payment. This seemingly insurmountable hurdle can leave many aspiring homeowners feeling discouraged. But fear not, future house flipper (or just someone who wants a home)! This guide will shed light on the down payment mystery and equip you with strategies to reach your financial summit.",
      h2: "Demystifying the Down Payment: Why is it Important?",
      p2: "The down payment is a portion of the home's purchase price that you pay upfront.  While lenders typically require a minimum down payment (usually around 20%), putting down a larger amount offers several advantages Lower Loan Amount: A bigger down payment translates to a smaller loan amount. This not only reduces your overall borrowing but also lowers your monthly mortgage payments.",
      img: "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/kara-eads-L7EwHkq1B2s-unsplash.jpg?v=1719931109", // Replace with the path to your image
      h3: "Creative Approaches to Down Payment Savings",
      p3: "Set a specific savings goal and challenge yourself to contribute a certain amount each week or month. This gamifies the process and keeps you motivated. Consider downsizing your living situation or cutting back on non-essential expenses to free up additional funds for your down payment. Remember, the journey to homeownership is a marathon, not a sprint.  By employing these strategies and remaining disciplined with your finances, you can conquer the down payment challenge and unlock the door to your dream home.",
    },
  ];
  const id = Number(params.id);
  const blog = blogData.filter((post) => post.id === id);
  const post = blog[0];

  return (
    <>
      <div className="w-full h-full bg-[#1b1b1b]">
        <div className="max-w-3xl px-4 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-2xl">
            {/* Content */}
            <div className="space-y-5 md:space-y-5">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold md:text-3xl text-white">
                  {post.h1}
                </h2>
                <p className="text-lg  text-white">{post.p1}</p>
              </div>

              <h2 className="text-lg font-bold text-white md:text-2xl">
                {post.h2}
              </h2>

              <p className="text-lg text-white">{post.p2}</p>
              <figure>
                <Image
                  width={600}
                  height={600}
                  className="w-full object-cover rounded-xl"
                  src={post.img}
                  alt="Image Description"
                />
              </figure>
              {/* <p className="text-lg text-gray-800">
                Whether they feature polarized lenses to reduce glare or
                UV-blocking coatings to shield your eyes from harmful rays,
                sunglasses for men at stores like Googlyensure that you not only
                look good but also safeguard your vision.
              </p> */}

              <h2 className="text-lg font-bold md:text-2xl text-white">
                {post.h3}
              </h2>

              <p className="text-lg text-white">{post.p3}</p>
            </div>
            {/* End Content */}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
