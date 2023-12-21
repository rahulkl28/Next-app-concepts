// import Left from "../@left/page";

export default function ParallelLayout({children, left ,right}){
    const issidebar = true
return (
    <section>
        {children}
        {/* {left}
        {right} */}
        {issidebar ? left: right}
    </section>
)
}