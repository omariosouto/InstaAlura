import React from 'react'
import Text from '../fundation/Text'
import { Box } from '../fundation/layout/Box'
import { Grid } from '../fundation/layout/Grid'
import Menu from '../commons/Menu'
import Footer from '../commons/Footer'
import Modal from '../commons/Modal'
import FormCadastro from '../patterns/FormCadastro'

export interface IFaqScreen {
	faqCategories:
		| [
				title: string,
				slug: string,
				questions: [title: string, slug: string, description: string]
		  ]
		| undefined;
}

export default function FAQScreen ({ faqCategories }: IFaqScreen) {
  const [isModalOpen, setModalState] = React.useState(false)

  if (faqCategories === undefined) {
    return <></>
  } else {
    return (
			<Box display="flex" flexDirection="column" flex="1">
				<Modal
					isOpen={isModalOpen}
					onClose={() => {
					  setModalState(false)
					}}>
					{(propsDoModal: any) => (
						<FormCadastro
							propsDoModal={propsDoModal}
							Close={() => setModalState(false)}
						/>
					)}
				</Modal>

				<Menu onCadastrarClick={() => setModalState(true)} />

				<Grid.Container style={{ flex: 1 }}>
					<Grid.Row
						marginTop={{ xs: '32px', md: '100px' }}
						marginBottom={{ xs: '32px', md: '100px' }}
						justifyContent="center">
						<Grid.Col value={{ xs: 12, md: 12 }} flex={1}>
							<Text
								variant="title"
								tag="h2"
								color="tertiary.main"
								textAlign="center">
								Como podemos te ajudar?
							</Text>
						</Grid.Col>
					</Grid.Row>
					<Grid.Row alignItems="flex-start" justifyContent="center" flex="1">
						{faqCategories &&
							faqCategories.map((category: any) => (
								<Grid.Col
									value={{ xs: 12, md: 3 }}
									flex={1}
									key={category.title}>
									<Box width="100%">
										<Text
											variant="subTitle"
											tag="h2"
											color="tertiary.main"
											marginBottom="26px">
											{category.title}
										</Text>

										<Box as="ul" padding="0" listStyle="none">
											{category.questions.map((question: any) => (
												<li key={question.title}>
													<Text
														href={`/faq/${question.slug}`}
														variant="paragraph1"
														tag="h2"
														color="tertiary.light">
														{question.title}
													</Text>
												</li>
											))}
										</Box>
									</Box>
								</Grid.Col>
							))}
					</Grid.Row>
				</Grid.Container>

				<Footer />
			</Box>
    )
  }
}