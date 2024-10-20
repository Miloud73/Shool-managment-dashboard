import Link from 'next/link'
import React from 'react'

const Shortcuts = () => {
  return (
    <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-lamaSkyLight " href="/">Teacher's classes</Link>
            <Link className="p-3 rounded-md bg-lamaPurpleLight " href="/">Teacher's Students</Link>
            <Link className="p-3 rounded-md bg-lamaYellowLight " href="/">Teacher's Lessons</Link>
            <Link className="p-3 rounded-md bg-lamaSky " href="/">Teacher's Exams</Link>
            <Link className="p-3 rounded-md bg-lamaPurple " href="/">Teacher's Assignments</Link>
          </div>

        </div>
  )
}

export default Shortcuts
