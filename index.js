import React from "react";

import { Img, Text, Line, Input, Button, List } from "../../components";
import Footer from "../../components/Footer";

const WEBPAGETwoPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="bg-gradient  flex items-center justify-end p-16 md:px-10 sm:px-5 shadow-bs w-full">
            <div className="flex items-center justify-start max-w-[1227px] mt-3 mx-auto w-full">
              <Img
                src="images/img_rewardgebar1.png"
                className="h-[491px] md:h-auto object-cover rounded-[20px] w-full"
                alt="rewardgebarOne"
              />
            </div>
          </div>
          <Text className="font-bold font-lato leading-[90.00px] md:ml-[0] ml-[101px] mt-4 md:text-5xl text-6xl text-center text-gray_900 uppercase"></Text>
          <div className="flex md:flex-col flex-row font-roboto gap-6 items-start justify-start max-w-[874px] mt-2 mx-auto md:px-5 self-stretch w-full">
            <div className="flex md:flex-1 flex-col justify-start rounded-[35px] shadow-bs w-auto md:w-full">
              <Text className="bg-clip-text bg-gradient1  font-medium md:ml-[0] ml-[38px] text-3xl sm:text-[26px] md:text-[28px] text-center text-transparent w-auto">
                Periode Pendaftaran
              </Text>
              <Text className="font-normal mt-1 not-italic md:text-2xl sm:text-[22px] text-[26px] text-center text-gray_900 w-auto">
                29 Oktober s/d 31 Desember 2022
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start rounded-[35px] shadow-bs w-auto md:w-full">
              <Text className="bg-clip-text bg-gradient1  font-medium text-3xl sm:text-[26px] md:text-[28px] text-center text-transparent w-auto">
                Periode Transaksi
              </Text>
              <Text className="font-normal mt-1 not-italic md:text-2xl sm:text-[22px] text-[26px] text-center text-gray_900 w-auto">
                s/d 23 Februari 2023
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[7px] items-start justify-end ml-auto mt-[54px] md:px-5 w-[95%] md:w-full">
            <div className="flex md:flex-col flex-row font-lato gap-8 items-center justify-start self-stretch w-auto md:w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-[481px] sm:w-full">
                <div className="flex items-start justify-start py-6 self-stretch w-auto">
                  <Text className="font-semibold text-5xl sm:text-[38px] md:text-[44px] text-center text-indigo_900 tracking-[2.00px] w-auto">
                    Cara Bergabung
                  </Text>
                </div>
                <div className="flex font-roboto h-[603px] sm:h-[771px] justify-end relative w-full">
                  <Line className="bg-orange_A701 h-[556px] mb-[7px] ml-[30px] mt-auto w-0.5" />
                  <div className="absolute flex flex-col gap-[47px] h-full inset-[0] items-start justify-start m-auto self-stretch w-auto">
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start self-stretch w-auto sm:w-full">
                      <Text className="bg-white_A700 border-2 border-orange_A701 border-solid font-normal h-[60px] not-italic pl-[22px] pr-[26px] sm:px-5 py-[13px] rounded-[50%] sm:text-2xl md:text-[26px] text-[28px] text-left text-orange_A701 w-[60px]">
                        1
                      </Text>
                      <Text className="font-normal leading-[32.00px] max-w-[397px] md:max-w-full not-italic text-2xl md:text-[22px] text-gray_901 text-left sm:text-xl">
                        Daftar Akun GIC pada form di samping
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start self-stretch w-auto sm:w-full">
                      <Text className="bg-white_A700 border-2 border-orange_A701 border-solid flex font-normal h-[60px] items-center justify-center not-italic sm:px-5 rounded-[50%] sm:text-2xl md:text-[26px] text-[28px] text-center text-orange_A701 w-[60px]">
                        2
                      </Text>
                      <Text className="font-normal leading-[32.00px] md:max-w-full max-w-sm not-italic text-2xl md:text-[22px] text-gray_901 text-left sm:text-xl"></Text>
                    </div>
                    <div className="flex flex-row gap-6 items-center justify-start self-stretch w-auto sm:w-full">
                      <Text className="bg-white_A700 border-2 border-orange_A701 border-solid flex font-normal h-[60px] items-center justify-center not-italic sm:px-5 rounded-[50%] sm:text-2xl md:text-[26px] text-[28px] text-center text-orange_A701 w-[60px]">
                        3
                      </Text>
                      <Text className="font-normal not-italic text-2xl md:text-[22px] text-gray_901 text-left sm:text-xl w-auto">
                        Lakukan Verifikasi Diri
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-center justify-start self-stretch w-auto sm:w-full">
                      <Text className="bg-white_A700 border-2 border-orange_A701 border-solid flex font-normal h-[60px] items-center justify-center not-italic sm:px-5 rounded-[50%] sm:text-2xl md:text-[26px] text-[28px] text-center text-orange_A701 w-[60px]">
                        4
                      </Text>
                      <Text className="font-normal not-italic text-2xl md:text-[22px] text-gray_901 text-left sm:text-xl w-auto">
                        Buat akun trading
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-center justify-start self-stretch w-auto sm:w-full">
                      <Text className="bg-white_A700 border-2 border-orange_A701 border-solid flex font-normal h-[60px] items-center justify-center not-italic sm:px-5 rounded-[50%] sm:text-2xl md:text-[26px] text-[28px] text-center text-orange_A701 w-[60px]">
                        5
                      </Text>
                      <Text className="font-normal not-italic text-2xl md:text-[22px] text-gray_901 text-left sm:text-xl w-auto">
                        Lakukan Deposit
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-center justify-start self-stretch w-auto sm:w-full">
                      <Text className="bg-white_A700 border-2 border-orange_A701 border-solid flex font-normal h-[60px] items-center justify-center not-italic sm:px-5 rounded-[50%] sm:text-2xl md:text-[26px] text-[28px] text-center text-orange_A701 w-[60px]">
                        6
                      </Text>
                      <Text className="font-normal not-italic text-2xl md:text-[22px] text-gray_901 text-left sm:text-xl w-auto">
                        Mulai Trading
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-8 items-center justify-start md:px-10 px-12 sm:px-5 py-8 rounded-[20px] self-stretch shadow-bs1 w-auto md:w-full">
                <div className="flex items-end justify-start self-stretch w-auto sm:w-full">
                  <Text className="font-semibold md:text-3xl sm:text-[28px] text-[32px] text-left text-orange_A700 uppercase w-auto">
                    daftar AKUN sekarang
                  </Text>
                </div>
                <div className="flex flex-col font-roboto gap-8 items-center justify-start self-stretch w-auto md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto md:w-full">
                    <Input
                      wrapClassName="bg-white_A700 border border-gray_900 border-solid pb-[27px] pl-7 pr-[35px] pt-6 rounded-[10px] w-full"
                      className="font-normal leading-[normal] md:text-[22px] not-italic p-0 placeholder:text-gray_500 sm:px-5 sm:text-xl text-2xl text-gray_500 text-left w-full"
                      name="groupFive"
                      placeholder="Nama Lengkap Sesuai Identitas"
                    ></Input>
                    <Input
                      wrapClassName="bg-white_A700 border border-gray_900 border-solid pb-[29px] pl-[27px] pr-[35px] pt-[21px] rounded-[10px] w-full"
                      className="font-normal leading-[normal] md:text-[22px] not-italic p-0 placeholder:text-gray_500 sm:px-5 sm:text-xl text-2xl text-gray_500 text-left w-full"
                      type="email"
                      name="groupSix"
                      placeholder="Email"
                    ></Input>
                    <Input
                      wrapClassName="bg-white_A700 border border-gray_900 border-solid pb-[29px] pl-[31px] pr-[35px] pt-[21px] rounded-[10px] w-full"
                      className="font-normal leading-[normal] md:text-[22px] not-italic p-0 placeholder:text-gray_500 sm:px-5 sm:text-xl text-2xl text-gray_500 text-left w-full"
                      type="password"
                      name="groupSeven"
                      placeholder="Password"
                    ></Input>
                    <div className="flex md:flex-col flex-row gap-6 items-start justify-start self-stretch w-auto md:w-full">
                      <Button className="bg-white_A700 border border-gray_900 border-solid cursor-pointer font-normal leading-[normal] min-w-[92px] not-italic py-[25px] rounded-[10px] text-2xl md:text-[22px] text-center text-gray_900 sm:text-xl w-auto">
                        +62
                      </Button>
                      <div className="flex items-center justify-start w-[81%] md:w-full">
                        <div className="bg-white_A700 border border-gray_900 border-solid flex flex-row items-center justify-between sm:pl-5 pl-[31px] rounded-[10px] w-full">
                          <Text className="font-normal not-italic text-2xl md:text-[22px] text-gray_500 text-left sm:text-xl w-auto">
                            Contoh : 873621863
                          </Text>
                          <Button className="bg-gradient1  cursor-pointer font-medium leading-[normal] min-w-[146px] py-[25px] rounded-bl-none rounded-br-[10px] rounded-tl-none rounded-tr-[10px] text-2xl md:text-[22px] text-center text-white_A700 sm:text-xl w-auto">
                            Kirim OTP
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start w-full">
                      <div className="flex items-center justify-start w-full">
                        <div className="md:h-20 h-[81px] relative w-full">
                          <div className="font-lato md:h-20 h-[81px] m-auto w-full">
                            <div className="absolute bg-white_A700 border border-bluegray_700 border-solid h-20 inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                            <Text className="absolute bottom-[0] font-normal left-[4%] not-italic text-2xl md:text-[22px] text-gray_500 text-left sm:text-xl w-[15%] sm:w-full">
                              Password
                            </Text>
                          </div>
                          <Input
                            wrapClassName="absolute bg-white_A700 border border-gray_900 border-solid inset-[0] m-auto pl-[27px] pr-[35px] py-[25px] rounded-[10px] w-full"
                            className="font-normal font-roboto justify-center leading-[normal] md:text-[22px] not-italic p-0 placeholder:text-gray_500 sm:px-5 sm:text-xl text-2xl text-gray_500 text-left w-full"
                            name="groupSeven_One"
                            placeholder="Kode OTP"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start w-full">
                      <div className="flex items-center justify-start w-full">
                        <div className="md:h-20 h-[81px] relative w-full">
                          <div className="font-lato md:h-20 h-[81px] m-auto w-full">
                            <div className="absolute bg-white_A700 border border-bluegray_700 border-solid h-20 inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                            <Text className="absolute bottom-[0] font-normal left-[4%] not-italic text-2xl md:text-[22px] text-gray_500 text-left sm:text-xl w-[15%] sm:w-full">
                              Password
                            </Text>
                          </div>
                          <Input
                            wrapClassName="absolute bg-white_A700 border border-gray_900 border-solid inset-[0] m-auto pb-[27px] pl-[27px] pr-[35px] pt-[23px] rounded-[10px] w-full"
                            className="font-normal font-roboto justify-center leading-[normal] md:text-[22px] not-italic p-0 placeholder:text-gray_500 sm:px-5 sm:text-xl text-2xl text-gray_500 text-left w-full"
                            type="email"
                            name="groupEight"
                            placeholder="Email Referral (optional)"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row font-lato gap-[30px] items-center justify-start w-[603px] md:w-full">
                      <div className="border border-orange_A700 border-solid h-8 rounded-[5px] w-8"></div>
                      <Text className="flex-1 font-normal max-w-[541px] md:max-w-full not-italic text-2xl md:text-[22px] text-gray_500 text-left sm:text-xl"></Text>
                    </div>
                  </div>
                  <Button className="bg-gradient1  cursor-pointer font-extrabold min-w-[254px] md:px-10 px-16 sm:px-5 py-1 rounded-[10px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white_A700 tracking-[0.96px] w-auto">
                    DAFTAR
                  </Button>
                </div>
              </div>
            </div>
            <Text className="font-normal font-roboto md:mt-0 mt-[268px] not-italic text-2xl md:text-[22px] text-center text-white_A700 sm:text-xl w-auto">
              Kirim OTP
            </Text>
          </div>
          <div className="font-montserrat h-[1148px] md:h-[981px] mt-[92px] md:px-5 relative w-full">
            <div
              className="absolute bg-cover bg-no-repeat flex h-[315px] items-end justify-start p-[25px] sm:px-5 right-[18%] top-[0] w-[35%]"
              style={{ backgroundImage: "url('images/img_group9.svg')" }}
            >
              <Img src="images/img_asset11.svg" className="h-[194px] mb-[38px] mt-[33px] w-auto" alt="assetEleven" />
            </div>
            <div className="absolute flex sm:flex-col flex-row gap-3.5 items-center justify-center left-[23%] top-[8%] w-[42%]">
              <Text className="bg-clip-text bg-gradient1  font-black sm:mt-0 mt-1 md:text-5xl text-[90px] text-left text-shadow-ts text-transparent tracking-[0.90px] w-auto">
                Grand
              </Text>
              <Text className="bg-clip-text bg-gradient2  font-black mb-1 md:text-5xl text-[90px] text-left text-transparent tracking-[0.90px] w-auto">
                Prize
              </Text>
            </div>
            <div className="absolute bg-gradient3  bottom-[0] flex inset-x-[0] items-center justify-start mx-auto w-full">
              <div className="h-[889px] relative w-full">
                <div className="h-[889px] m-auto w-full">
                  <div className="h-[889px] m-auto w-full">
                    <div className="absolute h-[889px] inset-[0] justify-center m-auto w-full">
                      <div className="absolute h-[889px] inset-y-[0] my-auto right-[0] w-[56%] md:w-full">
                        <div className="flex flex-col h-full items-end justify-start m-auto w-full">
                          <div className="flex relative w-full">
                            <Img
                              src="images/img_vector.png"
                              className="h-[475px] ml-[undefinedpx] my-auto object-cover w-auto z-[1]"
                              alt="vector"
                            />
                            <Img
                              src="images/img_vector_475x534.png"
                              className="h-[475px] ml-[-73.3px] my-auto object-cover w-auto z-[1]"
                              alt="vector_One"
                            />
                            <Img
                              src="images/img_vector_475x534.png"
                              className="h-[475px] ml-[undefinedpx] my-auto object-cover w-auto z-[1]"
                              alt="vector_Two"
                            />
                          </div>
                          <div className="h-[414px] relative w-[91%] md:w-full">
                            <Img
                              src="images/img_vector_475x534.png"
                              className="h-[414px] my-auto object-cover w-auto"
                              alt="vector_Three"
                            />
                            <Img
                              src="images/img_vector_475x534.png"
                              className="absolute h-[414px] inset-[0] justify-center m-auto object-cover w-auto"
                              alt="vector_Four"
                            />
                          </div>
                        </div>
                        <Img
                          src="images/img_vector_475x534.png"
                          className="absolute bottom-[36%] h-[207px] object-cover right-[0] w-auto"
                          alt="vector_Five"
                        />
                      </div>
                      <Img
                        src="images/img_vector_475x534.png"
                        className="absolute h-[475px] left-[10%] object-cover top-[0] w-auto"
                        alt="vector_Six"
                      />
                      <Img
                        src="images/img_vector_475x534.png"
                        className="absolute h-[475px] left-[0] object-cover top-[0] w-auto"
                        alt="vector_Seven"
                      />
                      <Img
                        src="images/img_vector.png"
                        className="absolute bottom-[0] h-[414px] inset-x-[0] mx-auto object-cover w-auto"
                        alt="vector_Eight"
                      />
                    </div>
                    <Img
                      src="images/img_vector_475x534.png"
                      className="absolute bottom-[0] h-[414px] left-[10%] object-cover w-auto"
                      alt="vector_Nine"
                    />
                    <Img
                      src="images/img_vector_475x534.png"
                      className="absolute bottom-[0] h-[414px] left-[0] object-cover w-auto"
                      alt="vector_Ten"
                    />
                  </div>
                  <Img
                    src="images/img_vector_475x534.png"
                    className="absolute bottom-[36%] h-[207px] left-[0] object-cover w-auto"
                    alt="vector_Eleven"
                  />
                </div>
                <List
                  className="absolute flex-col gap-[26px] grid inset-[0] items-center justify-center m-auto w-[90%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row gap-5 h-[395px] md:h-auto items-start justify-start max-w-[1225px] w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[33%] md:w-full">
                      <Img
                        src="images/img_image2.png"
                        className="h-[294px] sm:h-auto object-cover w-[84%] md:w-full"
                        alt="imageTwo"
                      />
                      <div className="bg-white_A700 flex items-start justify-start p-2 rounded-[20px] w-[395px] sm:w-full">
                        <Text className="font-medium sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray_901 tracking-[0.23px] w-auto">
                          Mitsubishi Xpander Sport CVT
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[15px] items-center justify-start w-[33%] md:w-full">
                      <Img
                        src="images/img_image5.png"
                        className="h-[273px] md:h-auto object-cover rounded-[20px] w-[273px]"
                        alt="imageFive"
                      />
                      <div className="flex items-center justify-start w-full">
                        <Button className="bg-white_A700 cursor-pointer font-medium p-2 rounded-[20px] sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray_901 tracking-[0.23px] w-[395px]">
                          Logam Mulia 100 gr
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[17px] items-center justify-start w-[33%] md:w-full">
                      <Img
                        src="images/img_image5_262x302.png"
                        className="h-[262px] md:h-auto object-cover w-[77%]"
                        alt="imageFive_One"
                      />
                      <div className="flex items-center justify-start w-full">
                        <Button className="bg-white_A700 cursor-pointer font-medium p-2 rounded-[20px] sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray_901 tracking-[0.23px] w-[395px]">
                          Vespa Sprint
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 h-[395px] md:h-auto items-start justify-start max-w-[1225px] w-full">
                    <div className="flex md:flex-1 flex-col gap-3.5 items-center justify-start w-[33%] md:w-full">
                      <Img
                        src="images/img_image6.png"
                        className="h-[225px] md:h-auto object-cover w-[86%]"
                        alt="imageSix"
                      />
                      <div className="flex items-center justify-start w-full">
                        <Button className="bg-white_A700 cursor-pointer font-medium p-2 rounded-[20px] sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray_901 tracking-[0.23px] w-[395px]">
                          New NMAX
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[49px] items-center justify-start w-[33%] md:w-full">
                      <Img
                        src="images/img_image7.png"
                        className="h-[214px] md:h-auto object-cover rounded-[10px] w-[81%]"
                        alt="imageSeven"
                      />
                      <div className="flex items-center justify-start w-full">
                        <Button className="bg-white_A700 cursor-pointer font-medium p-2 rounded-[20px] sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray_901 tracking-[0.23px] w-[395px]">
                          Tour Kuala Lumpur
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-11 items-center justify-start w-[33%] md:w-full">
                      <Img
                        src="images/img_image10.png"
                        className="h-[219px] md:h-auto object-cover rounded-[10px] w-[78%]"
                        alt="imageTen"
                      />
                      <div className="flex items-center justify-start w-full">
                        <div className="flex items-center justify-start w-full">
                          <Button className="bg-white_A700 cursor-pointer font-medium p-2 rounded-[20px] sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray_901 tracking-[0.23px] w-[395px]">
                            Tour Labuan Bajo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <Button className="bg-gradient4  cursor-pointer font-bold font-roboto leading-[normal] min-w-[387px] sm:min-w-full md:ml-[0] ml-[489px] mt-[103px] sm:px-5 px-8 py-6 rounded-[10px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white_A700 tracking-[2.00px] w-auto">
            Lihat Semua Hadiah
          </Button>
          <div className="flex font-roboto items-start justify-start md:ml-[0] ml-[303px] mt-[62px] px-16 md:px-5 py-6 self-stretch w-auto md:w-full">
            <Text className="font-semibold sm:text-[32px] md:text-[38px] text-[42px] text-indigo_900 text-left tracking-[2.00px] w-auto">
              Syarat dan Ketentuan Program
            </Text>
          </div>
          <Text className="font-arial font-normal leading-[50.00px] md:ml-[0] ml-[306px] mt-2 text-gray_900 text-left text-xl tracking-[0.20px]">
            <>
              Periode GIC Gebyar Hadiah berlaku 28 Oktober 2022 s/d 31 desember 2022
              <br />
              Program berlaku untuk nasabah yang melakukan pembukaan akun real barudi GIC, mendaftar dan melakukan
              verifikasi untuk mengikuti program ini.
              <br />
              Peserta pada program ini harus berusia 21 tahun ke atas. <br />
              Kriteria pemenang GIC Gebyar Hadiah adalah berdasarkan deposit awal dan total jumlah lot transaksi selama
              periode langsung
              <br />
              Hanya berlaku untuk Forex, Metal, Energy, dan Indices
              <br />
              Program hanya berlaku di akun tipe standar
              <br />
              Setiap nasabah hanya berhak meng-klaim satu reward sesuai dengan jumlah lot transaksi yang dicaapai
              <br />
              JIka nasabah tidak mencapai lot transaksi berdasarkan deposit awal, maka nasabah tetap bisa mengklaim
              reward sesuai dengan pencapaian lot
              <br />
              Peserta harus melakukan transaksi mandiri dan tidak dapat diwakilkan melalui sebuah kelompok, copy trade,
              robor trading, trade balance, arbitrase, dan sebagainya.
              <br />
              Nasabah GIC yang sebelumnya telah bergabung dapat mengikuti program ini dengan ketentuan membuka akun baru
              <br />
              Peserta wajib meng-klaim reward melalui form yang sudah ditentukan
              <br />
              Batas akhir klaim reward tanggal 28 Februaru 2023 (semua klaim setelah tanggal tersebut tidak berlaku
              lagi)
              <br />
              Hadian GIC Gebyar Hadiah akan dikirimkan kepada pemenang yang sudah didaftarkan di GIC atau bisa mengklaim
              secara langsung di Kantor GIC.
              <br />
              Pajak hadiah ditanggung oleh pemenang. Hadiah GIC Gebyar Hadiah hanya akan diberikan jika peserta memenuhi
              syarat minimum margin IN dan melakukan transaksi sebanyak lot transaksi yang telah disyaratkan
              <br />
              GIC berhak membatalkan GIC Gebyar Hadiah jika terbukti adanya kecurangan dan berbagai teknik manipulasi
              trading
              <br />
              Keputusan GIC bersifat mutlak dan tidak dapat diganggu gugat
              <br />
              Jika barang tidak tersedia maka akan diganti dengan barang lain dengan nilai yang sama.
              <br />
              Segala bentuk reward yang diklaim tidak dapat dicairkan dalam bentuk uang.
            </>
          </Text>
          <div className="flex flex-row font-roboto items-center justify-start md:ml-[0] ml-[557px] mt-8 md:px-5 self-stretch w-auto">
            <div className="flex items-center justify-start sm:px-5 px-6 py-4 self-stretch w-auto">
              <Text className="font-semibold text-[22px] text-center sm:text-lg text-orange_A700 md:text-xl w-auto">
                Tutup Sebagian
              </Text>
            </div>
            <Img src="images/img_arrowup.svg" className="h-12 w-12" alt="arrowup" />
          </div>
          <Footer className="bg-bluegray_700 flex font-lato items-center justify-center mt-[100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default WEBPAGETwoPage;