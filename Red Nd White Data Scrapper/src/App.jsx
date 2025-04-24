import React, { useEffect, useState } from 'react';
import './App.css';


const App = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://mocki.io/v1/7bdadd16-77d3-4d3f-adc0-5129a05b797f')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
        console.log(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div align="center">

      <header style={{ padding: '20px' }}>
        <img src={data.logo.image} alt="Logo" width={150} />
      </header>

      <h1>{data.name[0]}</h1> {/* Displaying "home" */}

      <h2>STD 10th & 12th Courses:</h2>
      <ul>
        {data.name[1]["STD 10th & 12th"].map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>

      <h2>Career Courses:</h2>
      <div>
        <h3>Designing:</h3>
        <ul>
          {data.name[1].CareerCourses.Designing.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>

        <h3>Visualization:</h3>
        <ul>
          {data.name[1].CareerCourses.Visualization.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>

        <h3>Coding & Programming:</h3>
        <ul>
          {data.name[1].CareerCourses["Coding&Programming"].map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>

      <div align="center">
      

        <h2>Courses:</h2>
        <div>
          <h3>Programming:</h3>
          <ul>
            {data.name[1].Courses.Programming.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>

          <h3>Graphic Design:</h3>
          <ul>
            {data.name[1].Courses.graphicDesign.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>

          <h3>Video Editing:</h3>
          <ul>
            {data.name[1].Courses.VideoEditing.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>

          <h3>Short Term Courses:</h3>
          <ul>
            {data.name[1].Courses.ShortTerm.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>

          <h3>Front End Coding:</h3>
          <ul>
            {data.name[1].Courses.FrontEndCoding.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>

          <h3>Project Training:</h3>
          <ul>
            {data.name[1].Courses.ProjectTranning.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>

          <h3>Foundation Courses:</h3>
          <ul>
            {data.name[1].Courses.FoundationCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>

          <h3>Corporate Training:</h3>
          <ul>
            {data.name[1].Courses.CorporateTraining.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>

          <h3>Next-Gen Technologies:</h3>
          <ul>
            {data.name[1].Courses["Next-Gen-Technologies"].map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>

          <h3>Accounting:</h3>
          <p>{data.name[1].Courses.Accounting}</p>
        </div>
      </div>


      <h2>About Us:</h2>
      <ul>
        {data.name[1].AboutUs.map((item, index) => {
          if (typeof item === 'string') {
            return <li key={index}>{item}</li>;
          } else if (typeof item === 'object') {
            return (
              <li key={index}>
                {Object.keys(item)[0]}:
                <ul>
                  {item[Object.keys(item)[0]].map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem}</li>
                  ))}
                </ul>
              </li>
            );
          }
          return null;
        })}
      </ul>

      <h2>Student Corner:</h2>
      <ul>
        {data.name[2].StudentCorner.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Contact us</h2>

      <h2>Slider Images:</h2>
      <div>
        {data.slider.images.map((image, index) => (
          <img key={index} src={image} alt={`Slider ${index + 1}`} width={300} />
        ))}
      </div>

      <h2>Statistics:</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {data.stats.map((stat, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
            <i className={`icon-${stat.icon}`} style={{ marginRight: '10px' }}></i>
            <strong>{stat.value}</strong> - {stat.label}
          </li>
        ))}
      </ul>

      <h2>{data.section.title}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {data.section.courses.map((course, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '10px', width: '150px' }}>
            <img src={course.icon} alt={course.name} width={50} />
            <span style={{ marginLeft: '10px' }}>{course.name}</span>
          </div>
        ))}
      </div>

      <div align="center">
        <h1>{data.card.title}</h1> {/* Displaying the title of the card */}

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {data.card.mentors.map((mentor, index) => (
            <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', margin: '10px', width: '300px', textAlign: 'center' }}>
              <img src={mentor.image} alt={mentor.name} width={100} style={{ borderRadius: '50%' }} />
              <h3>{mentor.name}</h3>
              <p>{mentor.designation}</p>
              <p>{mentor.experience}</p>
              <p>Mentor for: {mentor.mentor_for}</p>
              <div>
                {mentor.socials.map((social, socialIndex) => (
                  <a key={socialIndex} href="#" style={{ margin: '0 5px' }}>
                    <img src={social.icon} alt={social.platform} width={20} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Student & Parents Section */}
      <section>
        <h2>{data["student&Parents"].title}</h2>
        <p>
          {data["student&Parents"].highlighted_words.map((word, index) => (
            <strong key={index}>{word} </strong>
          ))}
          {data["student&Parents"].description}
        </p>
        <div>
          <img src={data["student&Parents"].icon} alt="Icon" width={50} />
          <h3>Features:</h3>
          <ul>
            {data["student&Parents"].features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div>
            <img src={data["student&Parents"].video.thumbnail_image} alt="Video Thumbnail" width={200} />
            <a href={data["student&Parents"].video.video_link} target="_blank" rel="noopener noreferrer">
              <img src={data["student&Parents"].video.play_icon} alt="Play Video" width={30} />
            </a>
          </div>
        </div>
      </section>


      {/* Web Design Course Section */}
      <section>
        <h2>{data.WebDesignCourse.heading}</h2>
        <h3>{data.WebDesignCourse.subheading}</h3>
        <p>{data.WebDesignCourse.description}</p>
        <h3>Features:</h3>
        <ul>
          {data.WebDesignCourse.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <a href={data.WebDesignCourse.button.link} style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
          {data.WebDesignCourse.button.text}
        </a>
        <div>
          <h4>{data.WebDesignCourse.video.title}</h4>
          <img
            src={data.WebDesignCourse.video.thumbnail}
            alt="Video Thumbnail"
            width={200}
            style={{ cursor: 'pointer' }}
            onClick={() => window.open(data.WebDesignCourse.video.embed_link, '_blank')}
          />

        </div>
      </section>

      <div align="center">
        <h1>{data.cityInformation.heading}</h1> {/* Displaying the heading */}

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {data.cityInformation.locations.map((location, index) => (
            <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
              <img src={location.image} alt={location.city} width={150} />
              <h3>{location.city}</h3>
              <p>Branches: {location.branches}</p>
            </div>
          ))}
        </div>
      </div>



      {/* Trending Courses Section */}
      <section>
        <h2>{data.TrendingCourse.heading}</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {data.TrendingCourse.courses.map((course, index) => (
            <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
              <img src={course.image} alt={course.title} width={150} />
              <h3>{course.title}</h3>
              <button style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' }}>
                {course.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure Section */}
      <section>
        <h2>{data.Infastructure.heading}</h2>
        <p>{data.Infastructure.description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {data.Infastructure.images.map((image, index) => (
            <img key={index} src={image} alt={`Infrastructure ${index}`} width={200} style={{ margin: '10px' }} />
          ))}
        </div>
      </section>


      <div>
        <h1>Student Reviews</h1>
        {data.reviews.map((review, index) => (
          <div key={index} className="review">
            <h2>{review.title}</h2>
            <h3>{review.name}</h3>
            <p>{review.review}</p>
            <p>Rating: {review.rating}</p>
            <img src={review.image} alt={review.name} width="100" />
          </div>
        ))}
      </div>


      <div align="center">
        {/* Footer Section */}
        <footer style={{ padding: '20px', backgroundColor: '#f1f1f1' }}>
          <h2>Contact Us</h2>
          <p>Branches:</p>
          <ul>
            {data.footer.contact_us.branches.map((branch, index) => (
              <li key={index}>{branch}</li>
            ))}
          </ul>
          <p>Phone: {data.footer.contact_us.phone}</p>
          <p>Email: {data.footer.contact_us.email}</p>
          <p>{data.footer.contact_us.franchise}</p>

          <h3>Follow Us</h3>
          <div>
            {data.footer.contact_us.social_media.map((social, index) => (
              <a key={index} href="#" style={{ margin: '0 10px' }}>
                <img src={social.icon} alt={social.name} width={30} />
              </a>
            ))}
          </div>

          <h3>Trending Courses</h3>
          <ul>
            {data.footer.trendingCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>

          <h3>Important Pages</h3>
          <ul>
            {data.footer.importantPages.map((page, index) => (
              <li key={index}>{page}</li>
            ))}
          </ul>

          <h3>Be a Recruiter</h3>
          <p>Phone: {data.footer.beRecruiter.phone}</p>
          <p>Email: {data.footer.beRecruiter.email}</p>
          <ul>
            {data.footer.beRecruiter.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>

          <h3>Certifications</h3>
          <div>
            {data.footer.certifications.map((certification, index) => (
              <img key={index} src={certification} alt={`Certification ${index}`} width={100} style={{ margin: '5px' }} />
            ))}
          </div>

          <p>{data.footer.copyright}</p>
          <p>{data.footer.certificateverification}</p>
        </footer>
      </div>

    </div>
  );
};

export default App;