import { Box, useMediaQuery } from "@mui/material"
import Row01 from "@/scenes/dashboard/row01";
import Row02 from "@/scenes/dashboard/row02";
import Row03 from "@/scenes/dashboard/row03";

const gridTemplateLargeScreen = `
"a b c"
"a b c"
"a b c"
"a b f"
"d e f"
"d e f"
"d h i"
"g h i"
"g h j"
"g h j"
`

const gridTemplateSmallScreen = `
"a"
"a"
"a"
"a"
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"d"
"d"
"d"
"e"
"e"
"f"
"f"
"g"
"g"
"g"
"h"
"h"
"h"
"h"
"i"
"i"
"j"
"j"
`

const Dashboard = () => {
  const isNonMobile = useMediaQuery('(min-width : 1200px)')
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isNonMobile ?
          {
            gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
            gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
            gridTemplateAreas: gridTemplateLargeScreen,
          } : {
            gridAutoColumns: "1fr",
            gridAutoRows: "80px",
            gridTemplateAreas: gridTemplateSmallScreen,
          }
      }
    >
      <Row01 />
      <Row02 />
      <Row03 />
    </Box >
  )
}

export default Dashboard