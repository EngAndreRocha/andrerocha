import React from 'react';
import { Field, FieldArray } from 'redux-form';
import {required/* , maxLength , maxLength15, minLength */, minLength2, exactLenght, number/* , minValue, maxValue, minValue13, email */,
  /* tooYoung, aol, */ alphaNumeric/* , alpha, alphapointhifen, phoneNumber, passMatch, address */, hashtags/* , validateImageWeight, validateImageWidth, validateImageHeight */} from './validate';
/* import UploadImage from '../components/Form/UploadImage/UploadImage' */
import MyDropzone from '../../components/Form/UploadImage/MyDropzone';


export const renderField = ({ input, label, type, classname, placeholder, fieldclass,autoComplete, meta: { touched, error, warning } }) => (
  <div className={fieldclass}>
    <label>{label}</label>
    <div>
      <input {...input} className={classname} placeholder={placeholder} type={type} autoComplete={autoComplete}/>
      {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
    </div>
  </div>
);

export const renderTextArea = ({ input, label, fieldclass, meta: { touched, error, warning } }) => (
  <div className={fieldclass}>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder={label} /* rows="20" cols="36" *//>
      {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
    </div>
  </div>
);

export const renderCheckBox = ({ input, label, type, name, id, fieldclass, meta: { touched, error, warning } }) => (
  <div className={fieldclass}>
      <label>{label}</label>
      <input {...input} placeholder={label} name={name} type={type} id={id} />
      {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
  </div>
);

export const renderImageCheckBox = ({ input, types, valued, srcs, onField_Click, fieldclass, meta: { touched, error, warning } }) => (
  <div className={fieldclass}>
      <label>
        <input {...input} type={types} value={valued} className="boximage"/>
        <img src={srcs} alt={valued} height="42" className="image-checkbox-img"  onClick={onField_Click}></img>
      </label>
      {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
  </div>
);

export const renderImageRadioBox = ({ input, types, ids, valued, srcs, fieldclass, meta: { touched, error, warning } }) => (
  <div className={fieldclass}>
      <input {...input} type={types} id={ids} value={valued} className="boximage"/>
      <label htmlFor={ids}>
        <img src={srcs} alt={ids} width="100" className="image-radiobox-img"></img>
      </label>
      {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
  </div>
);

export const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span className="form-error">{error}</span> : false;


const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

export const renderColorSelector = ({ input, fieldclass, meta: { touched, error, warning } }) => (
    <div className={fieldclass}>
      <select {...input}>
        <option value="">Select a color...</option>
        {colors.map(val => <option value={val} key={val}>{val}</option>)}
      </select>
      {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
    </div>
);

const country = ['Portugal'];

export const renderCountrySelector = ({ input, fieldclass, meta: { touched, error, warning } }) => (
    <div className={fieldclass}>
      <select {...input}>
        <option value="">Selecione País...</option>
        {country.map(val => <option value={val} key={val}>{val}</option>)}
      </select>
      {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
    </div>
);

const district = ['Viana Do Castelo', 'Braga', 'Porto','Vila Real', 'Bragança','Aveiro','Viseu','Guarda','Coimbra','Castelo Branco','Leiria','Lisboa','Santarém','Portalegre','Évora','Setubal','Beja','Faro','Açores','Madeira'];

export const renderDistrictSelector = ({ input, fieldclass, meta: { touched, error, warning } }) => (
    <div className={fieldclass}>
      <select {...input}>
        <option value="">Selecione Distrito...</option>
        {district.map(val => <option value={val} key={val}>{val}</option>)}
      </select>
      {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
    </div>
);

const gender = ['Homem', 'Mulher'];

export const renderGenderSelector = ({ input, fieldclass, meta: { touched, error, warning } }) => (
    <div className={fieldclass}>
      <select {...input}>
        <option value="">Select a Gender...</option>
        {gender.map(val => <option value={val} key={val}>{val}</option>)}
      </select>
      {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
    </div>
);

const tipo = ['Pontual', 'Semanal', 'Mensal', 'Anual'];

export const renderTipoEventoSelector = ({ input,label, fieldclass, meta: { touched, error, warning } }) => (
    <div className={fieldclass}>
      <label>{label}</label>
      <div>
        <select {...input}>
          <option value="">Tipo</option>
          {tipo.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
      </div>
   </div>
);

const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export const renderMesSelector = ({ input,label, fieldclass, meta: { touched, error, warning } }) => (
    <div className={fieldclass}>
      <label>{label}</label>
      <div>
        <select {...input}>
          <option value="">Mês</option>
          {mes.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
      </div>
    </div>
);

const dia_da_semana = ['Segundas', 'Terças', 'Quartas', 'Quintas', 'Sextas', 'Sabados', 'Domingos'];

export const renderDiadaSemanaSelector = ({ input,label, fieldclass, meta: { touched, error, warning } }) => (
    <div className={fieldclass}>
      <label>{label}</label>
      <div>
        <select {...input}>
          <option value="">Dia da Semana</option>
          {dia_da_semana.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
      </div>
    </div>
);

//{touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}


export const renderPatrocinadores = ({ fields, fieldclass, meta: { error } }) => (
  <ul className={fieldclass}>
    {fields.map((patrocinador, index) => (
      <li key={index}>
        <button type="button" title="Remover Patrocinador" className="smallremovebutton" onClick={() => fields.remove(index)}>&times;</button>
        <Field name={patrocinador} type="text" fieldclass="" component={renderField} label={`Patrocinador #${index + 1}`}/>
        {/* Avatar, nome, link */}
      </li>
    ))}
    {error && <li className="error">{error}</li>}
    <li>
      <button type="button"  className="formbutton" onClick={() => fields.push()}> + Patrocinador </button>
    </li>
  </ul>
)

export const renderEvento = ({ /* input,label, */ fieldclass, meta: { touched, error, warning } }) => (

        <div className={fieldclass}>
          <Field name='nome' type="text" fieldclass="addeventname" component={renderField} label={`Nome`} validate={[alphaNumeric,minLength2,required]}/>
          <Field name="maplink" type="text" fieldclass="addeventmap" component={renderField} label={`MAP LINK`} placeholder="https://www.openstreetmap.org/export/embed.html?bbox=-8.413266241550447%2C41.64822818509019%2C-8.410272896289827%2C41.64943473295817&amp;layer=mapnik&amp;marker=41.64883146184879%2C-8.411769568920135" validate={[required]}/>
          <Field name='descricao' type="text" fieldclass="addeventdescription" component={renderField} label={`Descrição`} validate={[alphaNumeric,minLength2,required]}/>
          <div className="divideintwo">
            <Field name='local' type="text" fieldclass="addeventlocal" component={renderField} label={`Local`} validate={[alphaNumeric,minLength2,required]}/>
            <Field name='tipo' type="text" fieldclass="addeventtype" component={renderField} label={`Tipo`} validate={[alphaNumeric,minLength2,required]}/>
            <Field name='data_inicio' type="date" fieldclass="addeventstartdate" component={renderField} label={`Data de Inicio:`} validate={[required]}/>
            <Field name='hora_inicio' type="time" fieldclass="addeventstarthour" component={renderField} label={`Começa às:`}/>
            <Field name='data_fim' type="date" fieldclass="addeventenddate" component={renderField} label={`Data de Fim:`}/>
            <Field name='hora_fim' type="time" fieldclass="addeventendhour" component={renderField} label={`Termina às:`}/>
            <Field name='preco' type="number" fieldclass="addeventprice" component={renderField} label={`Preço`} validate={[number]}/>
            <Field name='capacidade' type="number" fieldclass="addeventcapacity" component={renderField} label={`Capacidade`} validate={[number]}/>
          </div>
        </div>
);


export const renderEventos = ({ fields, fieldclass, meta: { error, submitFailed } }) => (
  <ul className={fieldclass}>
    {fields.map((evento, index) => (
      <li key={index}>
        <div className="event_number_remove">
          <h2 className="eventnumber">Evento #{index + 1}</h2>
          <button type="button" title="Remover Evento" className="bigbutton" onClick={() => fields.remove(index)}>&times;</button>
        </div>
        <div className="addevent">
          <Field name="image2" type="file" label="Fotos Evento"/* validate={[this.validateImageWeight,this.validateImageWidth,this.validateImageHeight, this.validateImageFormat]} */ component={renderFileInput}/>
          <Field name={`${evento}.nome`} type="text" fieldclass="addeventname" component={renderField} label={`Nome`}/>
          <Field name={`${evento}.descricao`} type="text" fieldclass="addeventdescription" component={renderField} label={`Descrição`}/>
          <div className="divideintwo">
            <Field name={`${evento}.local`} type="text" fieldclass="addeventlocal" component={renderField} label={`Local`}/>
            <Field name={`${evento}.tipo`} type="text" fieldclass="addeventtype" component={renderTipoEventoSelector} label={`Tipo`}/>
          </div>
          <div className="divideinsix">
            <Field name={`${evento}.diadasemana`} fieldclass="addeventdayofweek" component={renderDiadaSemanaSelector} label={`Dia da Semana`}/>
            <Field name={`${evento}.dia`} type="number" fieldclass="addeventday" component={renderField} label={`Dia`}/>
            <Field name={`${evento}.mes`} fieldclass="addeventmonth" component={renderMesSelector} label={`Mês`}/>
            <Field name={`${evento}.ano`} type="number" fieldclass="addeventyear" component={renderField} label={`Ano`} validate={[required, number]}/>
            <Field name={`${evento}.horainicio`} type="time" fieldclass="addeventstarthour" component={renderField} label={`Começa às:`}/>
            <Field name={`${evento}.horafim`} type="time" fieldclass="addeventendhour" component={renderField} label={`Termina às:`}/>
          </div>

          <div className="divideintwo">
            <Field name={`${evento}.preco`} type="number" fieldclass="addeventprice" component={renderField} label={`Preço`} validate={[required, number]}/>
            <Field name={`${evento}.capacidade`} type="number" fieldclass="addeventcapacity" component={renderField} label={`Capacidade`} /* validate={[required, maxLength15, minLength2, number]} *//>
          </div>

          <div className="divideinthree">
            <FieldArray name={`${evento}.patrocinadores`} fieldclass="addeventpromoters" component={renderPatrocinadores} />
            {/* <FieldArray name={`${evento}.fotos_promocionais`} label="Fotos Promocionais" fieldclass="addeventpromotingphotos" component={renderPhotoInput} />
            <FieldArray name={`${evento}.fotos_evento`} label="Fotos Evento" fieldclass="addeventphotos" component={renderPhotoInput} /> */}
          </div>
        </div>
      </li>
    ))}
    <li>
      <button type="button" className="bigbutton" onClick={() => fields.push({})}> + Evento </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
  </ul>
)

export const renderContatos = ({ fields, fieldclass, meta: { error } }) => (
  <ul className={fieldclass}>
    {fields.map((contato, index) => (
      <li key={index}>
        <button type="button" title="Remover Contato" className="smallremovebutton" onClick={() => fields.remove(index)}>&times;</button>
        <Field name={contato} type="number" fieldclass="" placeholder="9xxxxxxxx/25xxxxxxx" component={renderField} label={`Contato #${index + 1}`} validate={[required, exactLenght(9), number]}/>
      </li>
    ))}
    {error && <li className="error">{error}</li>}
    <li>
      <button type="button"  className="formbutton" onClick={() => fields.push()}> + Contato </button>
    </li>
  </ul>
)

export const renderRedesSociais = ({ fields, fieldclass, meta: { error } }) => (
  <ul className={fieldclass}>
    {fields.map((redesocial, index) => (
      <li key={index}>
        <button type="button" title="Remover Rede Social" className="smallremovebutton" onClick={() => fields.remove(index)}>&times;</button>
        <Field name={`${redesocial}.nome_rede`} fieldclass="" component={renderRedeSocialSelector} label={`#${index + 1}`} validate={[required]}/>
        <Field name={`${redesocial}.url`} type="url" fieldclass="" placeholder="www.Link.com" component={renderField} label={`#${index + 1}`} validate={[required]}/>
      </li>
    ))}
    {error && <li className="error">{error}</li>}
    <li>
      <button type="button"  className="formbutton" onClick={() => fields.push({})}> + Rede Social </button>
    </li>
  </ul>
)

const rede = ['Facebook', 'Instagram', 'Twitter', 'Pinterest', 'Youtube', 'Vine', 'LinkedIn'];

export const renderRedeSocialSelector = ({ input,label, fieldclass, meta: { touched, error, warning } }) => (
    <div className={fieldclass}>
      <label>{label}</label>
      <div>
        <select {...input}>
          <option value="">Rede Social</option>
          {rede.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
      </div>
    </div>
);

export const renderHashtags = ({ fields, fieldclass, meta: { error } }) => (
  <ul className={fieldclass}>
    {fields.map((hashtag, index) => (
      <li key={index}>
        <button type="button" title="Remover hashtag" className="smallremovebutton" onClick={() => fields.remove(index)}>&times;</button>
        <Field name={hashtag} type="text" fieldclass="" component={renderField} label={`hashtag #${index + 1}`} validate={[hashtags]}/>
      </li>
    ))}
    {error && <li className="error">{error}</li>}
    <li>
      <button type="button"  className="formbutton" onClick={() => fields.push()}> + hashtag </button>
    </li>
  </ul>
)

export const renderMorada = ({ input, name , fieldclass, meta: { touched, error, warning } }) => (
  <div className={fieldclass}>
    <label>Morada</label>
      <div className="arteria_in">
        <Field fieldclass="tipo_arteria_in" name="tipo_arteria" component={renderAbreviaturasSelector}/>
        <div className="nome_arteria_in"><Field type="text" name="nome_arteria" placeholder="NOME DA ARTERIA..."  component={renderField} required /></div>
      </div>
      <div className="identificacao_porta_in"><Field type="number" name="numero_porta" placeholder="Nº" maxLength="4" component={renderField} /></div>
      <div className="identificacao_alojamento_in"><Field type="text" name="identificacao_alojamento" placeholder="FTESQ" required component={renderField} /></div>
      <div className="referencia_auxiliar_in"><Field type="text" name="referencia_auxiliar" placeholder="REFERENCIA AUXILIAR..." required component={renderField} /></div>
      <div className="localidade_in"><Field type="text" name="localidade" placeholder="LOCALIDADE..." required component={renderField} /></div>
      <div className="codigo_postal_in">
        <div className="numero_postal_in">
          <div className="postal1_in">
            <Field type="number" name="numero_postal_primeiros" placeholder="4800" size="4" component={renderField} />
          </div>
          <div className="postal2_in">
            <Field type="number" name="numero_postal_segundos" placeholder="333" size="3" component={renderField} />
          </div>
        </div>
        <div className="designacao_postal_in"><Field type="text" name="designacao_postal" placeholder="DESIGNACAO POSTAL" required component={renderField} /></div>
      </div>
      <div className="coordenadas_in">
        <Field type="number" name="latitude" label="Latitude" placeholder="41.64883" size="8" lang="en-150" component={renderField} />
        <Field type="number" name="longitude" label="Longitude" placeholder="-8.41177" size="8" lang="en-150" component={renderField} />
      </div>
      {touched && ((error && <span className="form-error_in">{error}</span>) || (warning && <span className="form-warning_in">{warning}</span>))}
  </div>
);

/* const abreviaturas = ['Alameda - AL','Alferes - ALF','Almirante - ALM','Arquiteto(a) - ARQ','Associação - ASS','Avenida - AV','Azinhaga - AZ','Bairro - BR',
'Beco - BC','Bloco - BL','Brigadeiro - BRIG','Calçada - CC','Calçadinha - CCNH','Caminho - CAM','Capitão - CAP','Casal - CSL','Cave - CV','Comandante - CMDT',
'Comendador - COMEND','Conselheiro - CONS','Coronel - COR','Direito - DTO','Dom - D','Dona - D','Doutor(a) - DR','Duque - DQ','Edificio - EDF','Embaixador - EMB',
'Engenheiro(a) - ENG','Escadinhas - ESCNH','Esquerdo - ESQ','Estrada - ESTR','Frente - FT','General - GEN','Habitação - HAB','Infante - INF','Instituto - INST','Largo - LG',
'Loja - LJ','Lote - LT','Loteamento - LOTEAM','Marquês - MQ','Parque - PQ','Pátio - PTO','Praça - PC','Praceta - PCT','Professor(a)- PROF','Projetada - PROJ',
'Prolongamento - PROLNG','Quinta - QTA','Rés-do-chão - RC','Rotunda - ROT','Rua - R','São - S','Sargento - SARG','Sem Número - SN','Sobre-loja - SLJ','Sociedade - SOC',
'Sub-Cave - SCV','Tenente - TEN','Torre - TR','Transversal - TRANSV','Travessa - TV','Urbanização - URB','Vila - VL','Visconde - VISC','Vivenda - VV','Zona - ZN'];
 */
const abreviaturas = ['ALAMEDA','ALFERES','ALMIRANTE','APARTADO','ARQUITETO','ASSOCIACAO','AVENIDA','AZINHAGA','BAIRRO',
'BECO','BLOCO','BRIGADEIRO','CALCADA','CALCADINHA','CAMINHO','CAPITAO','CASAL','CAVE','COMANDANTE',
'COMENDADOR','CONSELHEIRO','CORONEL','DIREITO','DOM','DONA','DOUTOR','DOUTORA','DUQUE','EDIFICIO','EMBAIXADOR',
'ENGENHEIRA','ENGENHEIRO','ESCADINHAS','ESQUERDO','ESTRADA','FRENTE','GENERAL','HABITACAO','INFANTE','INSTITUTO','LARGO',
'LOJA','LOTE','LOTEAMENTO','MARQUES','PARQUE','PATIO','PRACA','PRACETA','PROFESSOR','PROFESSORA','PROJETADA',
'PROLONGAMENTO','QUINTA','RC','ROTUNDA','RUA','SAO','SARGENTO','SN','SOBRELOJA','SOCIEDADE',
'SUBCAVE','TENENTE','TORRE','TRANSVERSAL','TRAVESSA','URBANIZACAO','VILA','VISCONDE','VIVENDA','ZONA'];


export const renderAbreviaturasSelector = ({ input, name, fieldclass, meta: { touched, error, warning } }) => (
    <div className={fieldclass}>
        <select {...input} name={name}>
          <option value="" disabled>RUA(R)</option>
          {abreviaturas.map(val => <option value={val} key={val}>{val}</option>)} {/* Alterar */}
        </select>
        {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
   </div>
);

const categorias_sugestoes = [
'','','','','','','','','',''];


export const rendercategorias_sugestoesSelector = ({ input, name, fieldclass, meta: { touched, error, warning } }) => (
    <div className={fieldclass}>
        <select {...input} name={name}>
          <option value="" disabled>...</option>
          {categorias_sugestoes.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
   </div>
);


export const renderRegularPhotoInput = ({ input, label, type, fieldclass, meta: { touched, error, warning } }) => (
  <div className={fieldclass}>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} accept="image/*"/>
      {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
    </div>
  </div>
);

export const renderPhotoInput = ({ fields, label, fieldclass, meta: { error } }) => (
  <ul className={fieldclass}>
    {fields.map((foto, index) => (
      <li key={index}>
        <button type="button" className="smallremovebutton" title="- Foto" onClick={() => fields.remove(index)}>&times;</button>
        <Field name={`${foto}.imageToUpload`} type="file" component={MyDropzone}/>
      </li>
    ))}
    {error && <li className="error">{error}</li>}
    <li>
      <button type="button"  className="formbutton" onClick={() => fields.push()}> + {label} </button>
    </li>
  </ul>
)


export const handleChange = (event, input) => {
  event.preventDefault();
  let imageFile = event.target.files[0];
  if (imageFile) {
    console.log(imageFile);
    const localImageUrl = URL.createObjectURL(imageFile);
    const imageObject = new window.Image();

    imageObject.onload = () => {
      imageFile.width = imageObject.naturalWidth;
      imageFile.height = imageObject.naturalHeight;
      input.onChange(imageFile);
      URL.revokeObjectURL(imageFile);
    };
    imageObject.src = localImageUrl;
    /* this.handlePreview(localImageUrl); */
  }
};

export const renderFileInput = ({ input, label, type, meta }) => {
  return (
    <div className="fileInput_div">
      <label>{label}</label>
      <input
        name={input.name}
        type={type}
        accept="image/jpeg, image/png, .svg"
        onChange={event => handleChange(event, input)}
      />
      {meta && meta.invalid && meta.error/*  && (
        <Message negative header="Error:" content={meta.error} />
      ) */}
    </div>
  );
};

const orientation = ['sq', 'vt', 'hz'];

export const renderOrientationSelector = ({ input, fieldclass, meta: { touched, error, warning } }) => (
    <div className={fieldclass}>
      <select {...input}>
        <option value="">Selecione a Orientacao</option>
        {orientation.map(val => <option value={val} key={val}>{val}</option>)}
      </select>
      {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
    </div>
);

