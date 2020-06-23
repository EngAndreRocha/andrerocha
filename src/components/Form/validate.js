
export const required = value => (value || typeof value === 'number' ? undefined : 'Obrigatório!')
export const maxLength = max => value => value && value.length > max ? `Máximo de ${max} caracteres!`: undefined
export const maxLength15 = maxLength(15)
export const minLength = min => value => value && value.length < min ? `Mínimo de ${min} caracteres!`: undefined
export const minLength2 = minLength(2)
export const exactLenght = exactsize => value => value && value.length !== exactsize ? `${exactsize} caracteres`: undefined
export const number = value => value && isNaN(Number(value)) ? 'Apenas Números' : undefined
export const minValue = min => value => value && value < min ? `Quantidade mínima: ${min}`: undefined
export const maxValue = max => value => value && value < max ? `Quantidade maxima: ${max}`: undefined
export const minValue13 = minValue(13)
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)? 'Email Inválido!': undefined
export const tooYoung = value => value && value < 13? 'Não apresenta a idade mínima obrigatória!': undefined
export const aol = value => value && /.+@aol\.com/.test(value)? 'Really? You still use AOL for your email?': undefined
export const alphaNumeric = value => value && /[^a-zA-Z0-9.,çáàéèíìóòúùãõâêîôû!?& ]/i.test(value)? 'Apenas caracteres alfanuméricos': undefined
export const alpha = value => value && /[^a-zA-Z ]/i.test(value)? 'Apenas Letras!': undefined
export const alphapointhifen = value => value && /[^A-Z.-]/i.test(value)? 'Caracteres Inválidos': undefined
export const phoneNumber = value => value && !/^(0|[1-9][0-9]{9})$/i.test(value)? 'Numero Inválido!': undefined
export const passMatch = (value, allValues) => value && value !== allValues.password ? 'Password não corresponde!': undefined
export const address = value => value && /[^a-zA-Z0-9.,-]/i.test(value)? 'Morada Inválida!': undefined
export const hashtags = value => value && /(^|\B)#(?![0-9_]+\b)([a-zA-Z0-9_]{1,30})(\b|\r)/i.test(value)? 'Hashtag Inválido!': undefined




export const validateImageWeight = maxWeight => (imageFile) => {
    if (imageFile && imageFile.size) {
      // Get image size in kilobytes
      const imageFileKb = imageFile.size / 1024;
      if (imageFileKb > maxWeight) {
        return `Imagem tem que ter no máximo ${maxWeight}kb`;
      }
    }
};

export const validateImageWidth = maxWidth => (imageFile) => {
    if (imageFile) {
      if (imageFile.width > maxWidth) {
        return `A largura da imagem não pode ultrapassar os ${maxWidth}px`;
      }
    }
};

export const validateImageHeight = maxHeight => (imageFile) => {
    if (imageFile) {
      if (imageFile.height > maxHeight) {
        return `A altura da imagem não pode ultrapassar os ${maxHeight}px`;
      }
    }
};


