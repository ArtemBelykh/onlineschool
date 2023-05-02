import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CategoryBKostroma from "./Rates/CategoryB.Kostroma";
import CategoryBGalyth from "./Rates/CategoryB.Galyth";
import CategoryAKostroma from "./Rates/CategoryA.Kostroma";
import RecertificationInSchool from "./Rates/RecertificationInSchool";
import RememberEverything from "./Rates/RememberEverything";
import AdditionalDriving from "./Rates/AdditionalDriving";
import AdditionalLessonInTheory from "./Rates/AdditionalLessonInTheory";


const Acordion = () => {

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div className="hidden_acordionThird">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0 }}>
                        Категория "В", г. Кострома
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CategoryBKostroma/>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0 }}>Категория "В", г. Галич</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CategoryBGalyth/>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0 }}>
                        Категория "А", г. Кострома
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CategoryAKostroma/>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0 }}>Переаттестация после обучения в другой автошколе</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <RecertificationInSchool/>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0 }}>Вспомнить Всё!</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <RememberEverything/>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0 }}>Дополнительное вождение</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <AdditionalDriving/>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0 }}>Дополнительное занятие по теории</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <AdditionalLessonInTheory/>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Acordion;