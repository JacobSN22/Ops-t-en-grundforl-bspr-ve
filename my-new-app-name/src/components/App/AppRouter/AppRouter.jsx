import { Route, Routes } from "react-router-dom"
import {SectionOne} from '../../section-one/section-one'
import {SectionTwo} from '../../section-two/section-two'
import {SectionThree} from '../../section-three/section-three'
import {Form} from '../../form/form'
export const AppRouter = () => {
    return(
        <Routes>
            <Route path="/sectionone" element={<SectionOne/>} />
            <Route path="/sectiontwo" element={<SectionTwo/>}/>
            <Route path="/sectionthree" element={<SectionThree/>}/>
            <Route path="/form" element={<Form/>}/>
        </Routes>
    )
}