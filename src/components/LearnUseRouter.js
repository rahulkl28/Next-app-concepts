"use client"
import { useRouter } from "next/navigation"

const LearnUseRouter = () => {
    const router = useRouter()
    // console.log("Router", router);
  return (
    <>
    <h1>Use router</h1>
    <button type="button" className="btn btn-primary mx-2" onClick={()=>router.push("/admin/dashboard")}>Go to admin dash</button>
    <button type="button" className="btn btn-primary mx-2" onClick={()=>router.push("/admin/profile")}>Go to admin profile</button>
    </>
  )
}

export default LearnUseRouter