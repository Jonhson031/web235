import ContactCard from "./ContactCard"

export default function App() {
  return (
    <div>
      <ContactCard contact={{ name: "Stephen Colbert ", show: "Late Show", network: "CBS" }} />
      <ContactCard contact={{ name: "Jimmy Kimmel", show: "Jimmy Kimmel Live", network: "ABC" }} />
      <ContactCard contact={{ name: "James Corden", show: "The Late Late Show", network: "CBS" }} />
      <ContactCard contact={{ name: "Jimmy Fallon", show: "The Tonight Show", network: "NBC" }} />
    </div >
  )
}