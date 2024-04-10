import React from 'react'

export default function AdminDashboard() {
  return (
   
<div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f24a4a" className="inline-block w-8 h-8 stroke-current m-8" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#ec3636" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </div>
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
    <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#f52929" stroke="#f52929" className="inline-block w-8 h-8 stroke-current m-8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"></style> <g> <path class="st0" d="M484.516,19.531l-48.297,69.797l47.984,69.344h-54.266l-47.969-69.344l49.813-72h-68.625l-49.813,72 l47.969,69.344h-54.25l-47.969-69.344l49.797-72H240.25l-49.813,72l47.984,69.344h-54.266l-47.969-69.344l49.813-72h-68.625 l-49.813,72l47.969,69.344h-54.25L13.313,89.328l49.813-72H40c-22.094,0-40,17.906-40,40v397.344c0,22.094,17.906,40,40,40h432 c22.094,0,40-17.906,40-40V57.328C512,39.625,500.438,24.797,484.516,19.531z M480,454.672c0,4.422-3.594,8-8,8H40 c-4.406,0-8-3.578-8-8v-264h448V454.672z"></path> <path class="st0" d="M215.688,393.156c0.75,0.438,1.672,0.406,2.406-0.031l101.75-60.719c0.719-0.438,1.156-1.219,1.156-2.063 c0-0.813-0.438-1.609-1.156-2.031l-101.75-60.734c-0.734-0.422-1.656-0.453-2.406-0.031c-0.719,0.422-1.188,1.234-1.188,2.078 v60.719v60.734C214.5,391.953,214.969,392.75,215.688,393.156z"></path> </g> </g></svg>
    </div>
    <div className="stat-title">Movie</div>
    <div className="stat-value">3,200</div>
    <div className="stat-desc">↗︎ 200 (33%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg fill="#f23131" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 380 380" xml:space="preserve" transform="rotate(-45)" className="inline-block w-8 h-8 stroke-current m-8" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M148.882,194.098c-1.532,1.084-2.318,2.942-2.021,4.795c0.297,1.853,1.614,3.38,3.406,3.937l20.528,6.38l6.381,20.524 c0.236,0.778,0.665,1.468,1.219,2.022c0.717,0.723,1.665,1.217,2.715,1.381c1.853,0.293,3.714-0.489,4.79-2.021l12.413-17.55 l21.494,0.274c1.873,0.025,3.604-1.02,4.452-2.69c0.852-1.671,0.679-3.682-0.439-5.185l-12.857-17.225l6.902-20.354 c0.603-1.776,0.144-3.743-1.185-5.068c-1.323-1.327-3.285-1.785-5.062-1.18l-20.359,6.9l-17.228-12.855 c-1.498-1.121-3.511-1.293-5.184-0.443c-1.671,0.851-2.715,2.579-2.689,4.454l0.275,21.493L148.882,194.098z"></path> <path d="M377.353,272.721c-5.351-5.356-8.304-12.479-8.304-20.052c0-7.571,2.951-14.692,8.302-20.047 c3.528-3.528,3.528-9.249,0-12.776L160.149,2.644C158.457,0.954,156.161,0,153.762,0c-2.396,0-4.691,0.954-6.383,2.645 c-5.356,5.356-12.475,8.305-20.049,8.307c-7.573,0-14.694-2.95-20.052-8.308c-3.529-3.525-9.248-3.525-12.777,0L69.768,27.383 c-3.527,3.53-3.529,9.249,0,12.778c8.162,8.162,8.162,21.445,0,29.607c-3.955,3.955-9.214,6.131-14.806,6.13 c-5.589,0-10.852-2.175-14.805-6.13c-3.526-3.528-9.248-3.527-12.775,0L2.647,94.507c-3.526,3.526-3.528,9.245,0,12.773 c5.351,5.355,8.302,12.477,8.304,20.05c-0.002,7.571-2.953,14.692-8.304,20.046C0.948,149.071,0,151.367,0,153.764 s0.948,4.693,2.647,6.389L219.85,377.354c3.528,3.525,9.243,3.525,12.771,0c5.354-5.356,12.474-8.306,20.048-8.307 c7.573,0,14.692,2.949,20.052,8.309c1.763,1.764,4.076,2.645,6.391,2.645c2.309,0,4.62-0.881,6.387-2.645l24.735-24.739 c3.527-3.528,3.525-9.248,0-12.776c-8.162-8.165-8.16-21.445,0-29.609c3.955-3.954,9.214-6.129,14.806-6.129 c5.59,0,10.852,2.177,14.805,6.132c3.526,3.527,9.248,3.525,12.775-0.003l24.734-24.736c1.698-1.692,2.648-3.991,2.646-6.386 C380,276.711,379.052,274.413,377.353,272.721z M217.812,294.166L85.834,162.186l76.354-76.354l131.98,131.979L217.812,294.166z"></path> </g> </g> </g> </g></svg>
    </div>
    <div className="stat-title">Anime</div>
    <div className="stat-value">2,500</div>
    <div className="stat-desc">↘︎ 90 (20%)</div>
  </div>

</div>
  )
}
