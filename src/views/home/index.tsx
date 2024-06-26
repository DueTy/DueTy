import './index.less'
import { Grid, Button, Input } from '@mui/material'
import PcLayout from '@/layouts/PcLayout'

function App() {
  return (
    <PcLayout>
      <div className="page">
        <Grid display="flex" justifyContent="center" alignItems="center" className="banner-container font-bold">
          <i className="name din-alternate">DueTy's</i>
        </Grid>
      </div>
    </PcLayout>
  )
}

export default App
