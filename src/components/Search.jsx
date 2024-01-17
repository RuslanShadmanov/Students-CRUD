import React from 'react'
import { Button,Input } from 'reactstrap'

export default function Search({ searchQuery, setSearchQuery }) {
  return (
    <>
      {searchQuery && (
        <Button className="me-1" color="danger" onClick={()=>setSearchQuery("")}>
          x
        </Button>
      )}

      <Input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search..."
      />
    </>
  );
}
