import React, { useState, useMemo } from 'react';
import api from '../../services/api'
import './styles.css'


export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState('');
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData();
    const user_id = localStorage.getItem('user')

    data.append('thumbnail', thumbnail)
    data.append('company', company)
    data.append('techs', techs)
    data.append('price', price)

    await api.post('/spots', data, {
      headers: { user_id }
    })
    history.push('/dashboard');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        style={{ backgroundImage: `url(${preview})` }}
        id="thumbnail"
        className={thumbnail ? 'has-thumbnail' : ''}
      >
        <input
          type="file"
          onChange={event => setThumbnail(event.target.files[0])}
        />

      </label>
      <input
        id="company"
        placeholder="Sua empresa"
        value={company}
        onChange={event => setCompany(event.target.value)}
      />
      <label htmlFor="techs">Tecnologias separadas por virgula</label>
      <input
        id="techs"
        placeholder="Quais tecnologias"
        value={techs}
        onChange={event => setTechs(event.target.value)}
      />
      <label htmlFor="price">Valor da diária</label>
      <input
        id="price"
        placeholder="Valor por dia"
        value={price}
        onChange={event => setPrice(event.target.value)}
      />
      <button className="btn" type="submit">Cadastrar</button>
    </form>
  );
}
