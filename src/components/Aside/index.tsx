/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react';
import { Container, Link, List, OptionList, Text, Title, UserIcon } from "./styles";

export default function Aside() {
    const [editableTitle, setEditableTitle] = useState('Clique para alterar o nome');
    const [editableText, setEditableText] = useState('Clique para alterar o texto');


    return (
        <Container>
            <UserIcon>TH</UserIcon>
            <Title
                contentEditable={true} 
                suppressContentEditableWarning={true} 
                onBlur={(e) => setEditableTitle(e.currentTarget.textContent || '')}
                
            >
                {editableTitle}
            </Title>
            
            <Text
            contentEditable={true} 
            suppressContentEditableWarning={true} 
            onBlur={(e) => setEditableText(e.currentTarget.textContent || '')}>
                {editableText}
            </Text>
            
            <List>
                <OptionList>
                    <Link href="#">Link1</Link>
                    <Link href="#">Link2</Link>
                    <Link href="#">Link3</Link>
                    <Link href="#">Link4</Link>
                </OptionList>
            </List>
        </Container>
    );
}
