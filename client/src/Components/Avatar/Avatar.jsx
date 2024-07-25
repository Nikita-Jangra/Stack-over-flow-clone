import React from 'react'

const Avatar = ({children,margin,backgroundColor,py,px,color,borderRadius,fontSize,textAlign,cursor,textDecoration}) => {
  const style={
    backgroundColor,
    padding:`${py} ${px}`,
    color:color || "black",
    borderRadius,
    fontSize,
    textAlign:'center',
    cursor: cursor || null,
    textDecoration:"none",
    margin
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar
