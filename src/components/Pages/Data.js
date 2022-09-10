import React from 'react'
import DataList from './DataList';

export default function Data() {

    const items = [
        {
          title: "What is LTS?",
          content: "Ayush is a front end javascript framework",
        },
        {
          title: "Why use Ayush?",
          content: "Ayush is a favorite JS library among engineers",
        },
        {
          title: "How do you use React?",
          content: "You use React by creating components",
        },
      ];

  return (
    <div><DataList items={items}/></div>
  )
}
