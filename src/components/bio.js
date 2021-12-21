/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        //src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <>
        <p>
         শায়েখের অডিও তাফসীরসমুহ মসজিদে কুবায় ধারণ করা হয়েছে। প্রতি মঙ্গলবার বাদ ঈশা রাজধানী ঢাকার মোহাম্মাদপুরের মোহাম্মাদী হাউজিং লিমিটেড রোড ৩ এ কুবা মসজিদে তাফসীর অনুষ্ঠিত হয়। 
        </p>
        <AudioPlayer
          autoPlay
          src=".\AUD-20211212-WA0000.mp3"
          onPlay={e => console.log("onPlay")}
          // other props here
          />
        </>
        
        
      )}
    </div>
  )
}

export default Bio
