import { Box } from '@xstyled/styled-components'
// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import Button from '../../commons/Button/styles'
import TextField from '../../Forms/TextField'
import { Grid } from '../../fundation/layout/Grid'
import Text from '../../fundation/Text'

function FormContent () {
  const [userInfo, setUserInfo] = useState({
    usuario: 'maxmilliano',
    email: 'maxmillianosuprime@gmail.com'
  })

  function handleChange (event: any) {
    const fieldName = event.target.getAttribute('name')
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value
    })
  }

  const isFomInvalid = userInfo.usuario.length === 0 || userInfo.email.length === 0
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >

      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder='Email'
          type="text"
          name='email'
          onChange={handleChange}
          value={userInfo.email}
        />
      </div>

      <div>
        <TextField
          placeholder='Usuário'
          type="text"
          name='usuário'
          onChange={handleChange}
          value={userInfo.usuario}
        />
      </div>

      <Button
        variant='primary.main'
        type='submit'
        disabled={isFomInvalid}
        fullWidth
      >
        Cadastrar
      </Button>
    </form>
  )
}

export default function FormCadastro ({ propsDoModal }: any) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent='flex-end'
    >
      <Grid.Col
        display='flex'
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow='-10px 0px 24px rgba(7, 12, 14, 0.1)'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          flex={1}
          padding={{
            xs: '16px',
            md: '85px'
          }}
          backgroundColor='white'
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>

  )
}