import Image from "next/image";
import Link from "next/link";

export default function Blog() {
    const blogs = [
        {
            id: 1,
            "title": "How To Start Using Banko For Your Startup",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
            "tags": ["App", "Technology"],
            "image": "/image/image (9).png"
          },
          {
            id: 2,
            "title": "10 Things Nobody Told You About Banko",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
            "tags": ["Technology"],
            "image": "/image/image (11).png"
          },
          {
            id: 3,
            "title": "How To Start Using Banko For Your Startup",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
            "tags": ["App", "Product"],
            "image": "/image/image (12).png"
          },
         
    ];

  
        return (
            <div className="max-w-7xl mx-auto px-4 pt-[50px] pb-[160px]">
              <h2 className=" text-[64px] font-[500] mb-8 dm-sans">Blog</h2>
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blogs, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg "
                  >
                    <div className="relative h-[370px] w-full">
                    <Link href={`/blog/${blogs.id}`}>
                      <Image
                        src={blogs.image}
                        alt={blogs.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                      </Link>
                    </div>
                    <div className="p-4">
                    <h1 className="text-xl font-semibold mb-2"><Link href={`/blog/${blogs.id}`}>{blogs.title}</Link></h1>
                    <Link href={`/blog/${blogs.id}`}>{blogs.description}</Link>
                      <div className="flex flex-wrap gap-2">
                        {blogs.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
    );
}