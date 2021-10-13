import { AppBar, Container} from "@mui/material"
import { Toolbar } from "@mui/material"
import {ReactComponent as Logo } from '../assets/logo.svg'

export default function Header() {
    return (
        <AppBar position="relative" color="success">
          <Container maxWidth="md">
            <Toolbar>
                <Logo />
            </Toolbar>
          </Container>
        </AppBar>
    )
}