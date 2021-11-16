import React from "react"
import setupTags from "../utils/setupTags"

const TagsList = ({ recipes }) => {
  const TagsList = setupTags(recipes)
  console.log(TagsList)

  return (
    <div>
      <h4>tags list</h4>
    </div>
  )
}

export default TagsList
