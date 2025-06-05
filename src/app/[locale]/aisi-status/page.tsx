import React from 'react'
import SelectFloor from './_components/SelectFloor'
import Cover from './_components/Cover'
import StatusGallery from './_components/StatusGallery'
import StatusFAQ from './_components/StatusFAQ'

export default function page() {
  return (
    <>
    <Cover/>
    <SelectFloor/>
    <StatusGallery/>
    <StatusFAQ/>
    </>
  )
}
