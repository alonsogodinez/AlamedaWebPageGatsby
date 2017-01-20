import React from 'react'

import {Footer, PanelIntroSkills, PanelSkill} from '../components'
import { prefixLink } from 'gatsby-helpers'

export default class Habilidades extends React.Component {

  skills = [
    {
      title: "Digital Strategy",
      description: "Digital strategy is at the heart of our mission and represents all our projects." +
      "To do this, we have developed a unique approach combining user knowledge, brand message, competitive vision, " +
      "and also consumer experience. Our objective is to propose a relevant approach for the brand including and " +
      "especially for consumers.",
      background: "#ff6464",
      image: prefixLink("/./assets/skill-1.jpg")
    },

    {
      title: "Design & ERgonomy",
      description: "Digital strategy is at the heart of our mission and represents all our projects. " +
      "To do this, we have developed a unique approach combining user knowledge, brand message, competitive vision, " +
      "and also consumer experience. Our objective is to propose a relevant approach for the brand including and " +
      "especially for consumers.",
      background: "#fff",
      image: prefixLink("/./assets/skill-2.jpg")
    },

    {
      title: "Dev",
      description: "Digital strategy is at the heart of our mission and represents all our projects. " +
      "To do this, we have developed a unique approach combining user knowledge, brand message, competitive vision, " +
      "and also consumer experience. Our objective is to propose a relevant approach for the brand including and " +
      "especially for consumers.",
      background: "#135758",
      image: prefixLink("/./assets/skill-3.jpg")
    },

    {
      title: "Mobile",
      description: "Digital strategy is at the heart of our mission and represents all our projects. " +
      "To do this, we have developed a unique approach combining user knowledge, brand message, competitive vision, " +
      "and also consumer experience. Our objective is to propose a relevant approach for the brand including and " +
      "especially for consumers.",
      background: "#efbe4b",
      image: prefixLink("/./assets/skill-4.jpg")
    },

    {
      title: "Social",
      description: "Digital strategy is at the heart of our mission and represents all our projects. " +
      "To do this, we have developed a unique approach combining user knowledge, brand message, competitive vision, " +
      "and also consumer experience. Our objective is to propose a relevant approach for the brand including and " +
      "especially for consumers.",
      background: "#16242f",
      image: prefixLink("/./assets/skill-5.jpg")
    },
// note: it starts again
    {
      title: "Media",
      description: "Digital strategy is at the heart of our mission and represents all our projects. " +
      "To do this, we have developed a unique approach combining user knowledge, brand message, competitive vision, " +
      "and also consumer experience. Our objective is to propose a relevant approach for the brand including and " +
      "especially for consumers.",
      background: "#ff6464",
      image: prefixLink("/./assets/skill-6.jpg")
    },

    {
      title: "Digital solutions",
      description: "Digital strategy is at the heart of our mission and represents all our projects. " +
      "To do this, we have developed a unique approach combining user knowledge, brand message, competitive vision, " +
      "and also consumer experience. Our objective is to propose a relevant approach for the brand including and " +
      "especially for consumers.",
      background: "#ebebeb",
      image: prefixLink('/./assets/skill-7.jpg')
    }

  ];

  render() {
    return (
      <div>
        <PanelIntroSkills/>
        {
          this.skills.map((skill, i) =>
            <PanelSkill id={i} {...skill} />
          )
        }
        <Footer/>
      </div>
    )
  }


}