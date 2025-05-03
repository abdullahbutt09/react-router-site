import React from "react";

function Github() {
    return(
    <>
    <div className="text-pink-600 font-bold text-4xl p-5 text-center bg-gray-900">Abdullah Github Stats / Information</div>

        <div className="flex justify-center items-center gap-9 p-4 bg-gray-900 text-white flex-wrap">
  {/* GitHub Stats */}
  <img
    src="https://github-readme-stats.vercel.app/api?username=abdullahbutt09&show_icons=true&theme=radical"
    alt="GitHub Stats"
    className=""
  />

  {/* Top Languages */}
  <img
    src="https://github-readme-stats.vercel.app/api/top-langs/?username=abdullahbutt09&layout=compact&theme=radical"
    alt="Top Languages"
    className=""
  />
  {/* Activity Time */}
<img
  src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=abdullahbutt09&theme=radical"
  alt="Most Active Time"
  className=""
/>

  {/* GitHub Streak */}
  <img
    src="https://streak-stats.demolab.com?user=abdullahbutt09&theme=radical&border_radius=5.5"
    alt="GitHub Streak"
    className=""
  />

  {/* Profile Summary Card */}
  <img
    src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=abdullahbutt09&theme=radical"
    alt="Profile Summary"
    className=""
  />
</div>
</>
    )
}

export default Github;