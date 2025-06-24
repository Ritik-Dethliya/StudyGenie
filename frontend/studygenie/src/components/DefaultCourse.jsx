function DefaultCourse() {
    const courses = [
  {
    title: "Full Stack Web Development",
    description: "Become a full stack web developer with hands-on projects using HTML, CSS, JS, React, Node, and MongoDB.",
    image: "https://images.ctfassets.net/pdf29us7flmy/4kzxC9TTfbjNvzPtJKteuo/b29db6d6d88c4b3a101fc1cbdb3c8313/AdobeStock_405899926.jpeg",
    price: 4999,
    instructor: "Ritik Dethliya",
    duration: "6 months"
  },
  {
    title: "Data Science with Python",
    description: "Master data science techniques including data wrangling, analysis, visualization, and machine learning.",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*wUlZsZDQTOe13UHzDQLPfg.png",
    price: 5999,
    instructor: "Priya Sharma",
    duration: "4 months"
  },
  {
    title: "UI/UX Design Bootcamp",
    description: "Learn UI/UX fundamentals, design systems, and Figma skills to create impactful digital experiences.",
    image: "https://uxdesign.cc/_next/image?url=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*YVbYxZ7tAEMPhU-xyJsl0A.png&w=1920&q=75",
    price: 3999,
    instructor: "Ankit Verma",
    duration: "3 months"
  },
  {
    title: "Flutter App Development",
    description: "Build native iOS and Android apps using Dart and Flutter. No prior experience needed.",
    image: "https://res.cloudinary.com/practicaldev/image/fetch/s--ULnMZxyP--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/k2zuphrfmnf1fdw2l8lr.png",
    price: 4499,
    instructor: "Sneha Kapoor",
    duration: "5 months"
  },
  {
    title: "Digital Marketing Expert",
    description: "Explore SEO, Google Ads, content and social media marketing with practical examples and tools.",
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg",
    price: 2999,
    instructor: "Rahul Mehta",
    duration: "2 months"
  }
];
    return (  
        <>
            <div className="flex flex-wrap my-70">
                {courses.length>0 && 
                    courses.map((course,ind)=>{
                        return(
                            <div key={ind} className="p-2 shadow-lg w-full sm:w-full md:w-1/2 lg:w-1/3">
                                <h1 className="font-bold ">{course.title}</h1>
                                <img src={course.image} alt="" className="w-full"/>
                                <p>{course.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default DefaultCourse;