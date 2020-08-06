import React from 'react';

import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';


function TeacherForm(){



  return (
    <div id="page-teacher-form" className="container">
      <div id="page-teacher-list" className="container">
        <PageHeader title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição!"
        />

        <main>
          <fieldset>
            <legend>Seus dados:</legend>
            <Input name="name" label="nome completo:"/>
            <Input name="avatar" label="avatar:"/>
            <Input name="whatsapp" label="whatsapp:"/>
            <Textarea
              name="bio"
              label="biografia:" />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula:</legend>
            <Select
              name="subject"
              label="matéria"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação Física', label: 'Educação Física' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
              ]}
            />
            <Input
              name="cost"
              label="custo da sua hora por aula"

            />
          </fieldset>

          <fieldset>
            <legend>
              horários disponíveis
              <button type="button">
                + novo horário
              </button>
            </legend>

                <div className="schedule-item">
                  <Select
                    name="week_day"
                    label="dia da semana"
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sábado' },
                    ]}
                  />
                  <Input
                    name="from"
                    label="das"
                    type="time"
                  />

                  <Input
                    name="to"
                    label="até"
                    type="time"
                  />
                </div>
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar Cadastro</button>
          </footer>

      </main>
    </div>
    </div>
  );
}

export default TeacherForm;