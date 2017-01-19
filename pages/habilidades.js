import React from 'react'

import {Footer, PanelIntroSkills, PanelSkill} from '../components'

export default class Habilidades extends React.Component {

  skills = [
    {
      title: "Digital Strategy",
      description: "Digital strategy is at the heart of our mission and represents all our projects. " +
      "To do this, we have developed a unique approach combining user knowledge, brand message, competitive vision, " +
      "and also consumer experience. Our objective is to propose a relevant approach for the brand including and " +
      "especially for consumers. For us, strategy is not an overused term but provides clear and coherent direction " +
      "to all digital approaches to a brand. This enables us to put forward a relevant approach for each project " +
      "assigned to us and to define a clear role for digital aspects of their communications.",
      background: "#ff6464",
      image: "url"
    },

    {
      title: "Design & ERgonomy",
      description: "Digital strategy is at the heart of our mission and represents all our projects. " +
      "To do this, we have developed a unique approach combining user knowledge, brand message, competitive vision, " +
      "and also consumer experience. Our objective is to propose a relevant approach for the brand including and " +
      "especially for consumers. For us, strategy is not an overused term but provides clear and coherent direction " +
      "to all digital approaches to a brand. This enables us to put forward a relevant approach for each project " +
      "assigned to us and to define a clear role for digital aspects of their communications.",
      background: "#fff",
      image: "url"
    },

    {
      title: "Dev",
      description: "Digital strategy is at the heart of our mission and represents all our projects. " +
      "To do this, we have developed a unique approach combining user knowledge, brand message, competitive vision, " +
      "and also consumer experience. Our objective is to propose a relevant approach for the brand including and " +
      "especially for consumers. For us, strategy is not an overused term but provides clear and coherent direction " +
      "to all digital approaches to a brand. This enables us to put forward a relevant approach for each project " +
      "assigned to us and to define a clear role for digital aspects of their communications.",
      background: "#135758",
      image: "url"
    },

    {
      title: "Mobile",
      description: "Digital strategy is at the heart of our mission and represents all our projects. " +
      "To do this, we have developed a unique approach combining user knowledge, brand message, competitive vision, " +
      "and also consumer experience. Our objective is to propose a relevant approach for the brand including and " +
      "especially for consumers. For us, strategy is not an overused term but provides clear and coherent direction " +
      "to all digital approaches to a brand. This enables us to put forward a relevant approach for each project " +
      "assigned to us and to define a clear role for digital aspects of their communications.",
      background: "#efbe4b",
      image: "url"
    },

    {
      title: "Social",
      description: "Digital strategy is at the heart of our mission and represents all our projects. " +
      "To do this, we have developed a unique approach combining user knowledge, brand message, competitive vision, " +
      "and also consumer experience. Our objective is to propose a relevant approach for the brand including and " +
      "especially for consumers. For us, strategy is not an overused term but provides clear and coherent direction " +
      "to all digital approaches to a brand. This enables us to put forward a relevant approach for each project " +
      "assigned to us and to define a clear role for digital aspects of their communications.",
      background: "#16242f",
      image: "url"
    },
// note: it starts again
    {
      title: "Media",
      description: "Digital strategy is at the heart of our mission and represents all our projects. " +
      "To do this, we have developed a unique approach combining user knowledge, brand message, competitive vision, " +
      "and also consumer experience. Our objective is to propose a relevant approach for the brand including and " +
      "especially for consumers. For us, strategy is not an overused term but provides clear and coherent direction " +
      "to all digital approaches to a brand. This enables us to put forward a relevant approach for each project " +
      "assigned to us and to define a clear role for digital aspects of their communications.",
      background: "#ff6464",
      image: "url"
    },

    {
      title: "Digital solutions",
      description: "Digital strategy is at the heart of our mission and represents all our projects. " +
      "To do this, we have developed a unique approach combining user knowledge, brand message, competitive vision, " +
      "and also consumer experience. Our objective is to propose a relevant approach for the brand including and " +
      "especially for consumers. For us, strategy is not an overused term but provides clear and coherent direction " +
      "to all digital approaches to a brand. This enables us to put forward a relevant approach for each project " +
      "assigned to us and to define a clear role for digital aspects of their communications.",
      background: "#fff",
      image: "url"
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