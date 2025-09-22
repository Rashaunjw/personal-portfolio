export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Initials in top left corner */}
      <div className="absolute top-8 left-8">
        <h1 className="text-5xl font-bold" style={{fontFamily: 'SnackerComic, sans-serif'}}>RJW</h1>
      </div>
      
        {/* Full name in center */}
          <div className="flex flex-col items-center justify-center min-h-screen gap-8">
            {/* First 4 boxes above name - horizontal scrollable */}
            <div className="w-full overflow-x-auto">
              <div className="flex flex-row gap-8 justify-start min-w-max px-4">
              {/* Bio box */}
              <div className="relative max-w-md bio-box">
                <img 
                  src="/images/boxes/bio.png" 
                  alt="Bio" 
                  className="w-full h-auto"
                />
                <div className="absolute top-2 left-2 box-number">01</div>
                <div className="absolute bottom-2 left-2 box-label">bio</div>
              </div>
              
              {/* Career box */}
              <div className="relative max-w-md career-box">
                <img 
                  src="/images/boxes/career.png" 
                  alt="Career" 
                  className="w-full h-auto"
                />
                <div className="absolute top-2 left-2 box-number">02</div>
                <div className="absolute bottom-2 left-2 box-label">career</div>
              </div>
              
              {/* Email box */}
              <div className="relative max-w-md email-box">
                <img 
                  src="/images/boxes/email.png" 
                  alt="Email" 
                  className="w-full h-auto"
                />
                <div className="absolute top-2 left-2 box-number">03</div>
                <div className="absolute bottom-2 left-2 box-label">email</div>
              </div>
              
              {/* Projects box */}
              <div className="relative max-w-md projects-box">
                <img 
                  src="/images/boxes/projects.png" 
                  alt="Projects" 
                  className="w-full h-auto"
                />
                <div className="absolute top-2 left-2 box-number">04</div>
                <div className="absolute bottom-2 left-2 box-label">projects</div>
              </div>
            </div>
            </div>

            {/* Name in center */}
            <h2 className="text-9xl font-light my-name" style={{fontFamily: 'SnackerComic, sans-serif'}}>Rashaun Jamal Williams</h2>
            
            {/* Last 3 boxes below name - horizontal scrollable */}
            <div className="w-full overflow-x-auto">
              <div className="flex flex-row gap-8 justify-start min-w-max px-4">
              {/* LinkedIn box */}
              <a href="https://www.linkedin.com/in/rashaunwilliams" target="_blank" rel="noopener noreferrer" className="relative max-w-md linkedin-box block cursor-pointer hover:opacity-80 transition-opacity">
                <img 
                  src="/images/boxes/linkedin.png" 
                  alt="LinkedIn" 
                  className="w-full h-auto"
                />
                <div className="absolute top-2 left-2 box-number">05</div>
                <div className="absolute bottom-2 left-2 box-label">LinkedIn</div>
              </a>
              
              {/* Phone box */}
              <div className="relative max-w-md phone-box">
                <img 
                  src="/images/boxes/phone.png" 
                  alt="Phone" 
                  className="w-full h-auto"
                />
                <div className="absolute top-2 left-2 phone-number">06</div>
                <div className="absolute bottom-2 left-2 phone-label">phone</div>
              </div>
              
              {/* Github box */}
              <a href="https://github.com/Rashaunjw" target="_blank" rel="noopener noreferrer" className="relative max-w-md github-box block cursor-pointer hover:opacity-80 transition-opacity">
                <img 
                  src="/images/boxes/github.png" 
                  alt="Github" 
                  className="w-full h-auto"
                />
                <div className="absolute top-2 left-2 github-number">07</div>
                <div className="absolute bottom-2 left-2 github-label">Github</div>
              </a>
            </div>
          </div>
    </div>
    </div>
  );
}
