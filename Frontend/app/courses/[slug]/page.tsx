import Link from "next/link"

export default function CoursesPage() {
  const courses = ["neet", "jee", "nda", "mhtcet", "boards"]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map(slug => (
          <Link 
            key={slug} 
            href={`/courses/${slug}`} 
            className="p-6 border rounded hover:shadow"
          >
            <h2 className="text-xl font-semibold capitalize">{slug}</h2>
            <p className="mt-2 text-sm text-gray-600">Learn more & enroll</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
