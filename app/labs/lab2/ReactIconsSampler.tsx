import "./tailwind/utilities.css";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { MdSchool } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <section id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2>React Icons Sampler</h2>
      <div className="flex flex-wrap gap-3 text-3xl">
        <VscAccount aria-label="Account" />
        <AiOutlineDashboard aria-label="Dashboard" />
        <FaBookBible aria-label="Book" />
        <FaCalendar aria-label="Calendar" />
        <FaEnvelopeOpenText aria-label="Inbox" />
        <FaRegClock aria-label="Recent activity" />
        <MdSchool className="text-blue-600" aria-label="School" />
        <HiAcademicCap className="text-green-700" aria-label="Academics" />
      </div>
    </section>
  );
}